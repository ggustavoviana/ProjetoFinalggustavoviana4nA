import { Router } from 'express';
import UserController from '../controllers/userController';

const router = Router();

router.get('/', UserController.getAllUsers); // Obter todos os usuários
router.post('/', UserController.createUser); // Criar usuário
router.put('/:id', UserController.updateUser); // Atualizar usuário
router.delete('/:id', UserController.deleteUser); // Excluir usuário

router.post('/auth/login', UserController.login);
router.get('/protected', authenticateToken, (req, res) => {
    res.json({ message: 'Rota protegida acessada com sucesso!', user: req.user });
});

export default router;
