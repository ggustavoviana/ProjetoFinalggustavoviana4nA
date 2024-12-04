import express from 'express';
import cors from 'cors';
import bookRoutes from './routes/bookRoutes';

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Rotas para os livros
app.use('/', bookRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
