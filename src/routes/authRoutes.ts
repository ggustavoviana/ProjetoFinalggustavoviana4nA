import { Router } from 'express';
import AuthController from '../controllers/authController';

const router = Router();

// Rota de login
router.post('/login', AuthController.login);

export default router;
