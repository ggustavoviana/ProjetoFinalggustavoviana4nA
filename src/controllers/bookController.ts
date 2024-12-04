import { Request, Response } from 'express';

// Simulação de banco de dados com array local (substitua por conexão com DB real)
const books: Array<{ id: number, title: string, subtitle: string, image: string, price: string }> = [];

export const BookController = {
  // Listar todos os livros
  getAllBooks(req: Request, res: Response) {
    res.json({ books });
  },

  // Cadastrar um novo livro
  createBook(req: Request, res: Response) {
    const newBook = { id: books.length + 1, ...req.body }; // Gera um ID incremental
    books.push(newBook);
    res.status(201).json(newBook);
  },

  // Atualizar um livro pelo ID
  updateBook(req: Request, res: Response) {
    const { id } = req.params;
    const index = books.findIndex(book => book.id === parseInt(id));
    if (index !== -1) {
      books[index] = { ...books[index], ...req.body };
      res.json(books[index]);
    } else {
      res.status(404).json({ message: 'Livro não encontrado' });
    }
  },

  // Deletar um livro pelo ID
  deleteBook(req: Request, res: Response) {
    const { id } = req.params;
    const index = books.findIndex(book => book.id === parseInt(id));
    if (index !== -1) {
      books.splice(index, 1);
      res.status(200).json({ message: 'Livro excluído com sucesso' });
    } else {
      res.status(404).json({ message: 'Livro não encontrado' });
    }
  },

  // Buscar detalhes de um livro pelo ID
  getBookById(req: Request, res: Response) {
    const { id } = req.params;
    const book = books.find(book => book.id === parseInt(id));
    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ message: 'Livro não encontrado' });
    }
  }
};
