import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

class UserController {
    static async login(req: Request, res: Response) {
        const { username, password } = req.body;

        // Substitua por sua lógica de validação de usuário
        if (username === 'admin' && password === '123456') {
            const secret = process.env.JWT_SECRET || 'chave_secreta';
            const token = jwt.sign({ username }, secret, { expiresIn: '1h' });

            return res.status(200).json({ token });
        } else {
            return res.status(401).json({ message: 'Credenciais inválidas.' });
        }
    }
}

export default UserController;
