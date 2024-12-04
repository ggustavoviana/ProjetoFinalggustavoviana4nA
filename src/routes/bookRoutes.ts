import { Router } from 'express';
import { BookController } from '../controllers/bookController';

const router = Router();

// Listar todos os livros
router.get('/', BookController.getAllBooks);

// Cadastrar um novo livro
router.post('/', BookController.createBook);

// Atualizar um livro pelo ID
router.put('/:id', BookController.updateBook);

// Deletar um livro pelo ID
router.delete('/:id', BookController.deleteBook);

// Buscar detalhes de um livro pelo ID
router.get('/:id', BookController.getBookById);

export default router;






