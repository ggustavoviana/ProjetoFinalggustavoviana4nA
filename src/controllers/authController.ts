import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import UserService from '../services/userService'; // Serviço para interagir com o banco de dados

class AuthController {
    // Método para login
    static async login(req: Request, res: Response) {
        try {
            const { username, password } = req.body; // Obtém os dados do corpo da requisição

            // Verifica se os dados estão presentes
            if (!username || !password) {
                return res.status(400).json({ message: 'Usuário e senha são obrigatórios' });
            }

            // Busca o usuário no banco de dados
            const user = await UserService.getUserByUsername(username); // Ajuste conforme sua implementação

            if (!user) {
                return res.status(401).json({ message: 'Usuário não encontrado' });
            }

            // Verifica se a senha é válida
            const isPasswordValid = await bcrypt.compare(password, user.password); // Ajuste o campo conforme seu modelo

            if (!isPasswordValid) {
                return res.status(401).json({ message: 'Senha incorreta' });
            }

            // Gera o token JWT
            const token = jwt.sign(
                { id: user.id, username: user.username }, // Payload
                process.env.JWT_SECRET as string,        // Chave secreta
                { expiresIn: '1h' }                      // Tempo de expiração
            );

            // Retorna o token
            return res.status(200).json({ token });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Erro interno do servidor' });
        }
    }

    // Método para obter dados do usuário autenticado (rota protegida)
    static async getUserProfile(req: Request, res: Response) {
        try {
            const userId = req.user.id; // ID do usuário extraído do token JWT (middleware)
            const user = await UserService.getUserById(userId);

            if (!user) {
                return res.status(404).json({ message: 'Usuário não encontrado' });
            }

            return res.status(200).json({ user });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Erro ao obter os dados do usuário' });
        }
    }
}

export default AuthController;
