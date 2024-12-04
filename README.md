# ProjetoFinalggustavoviana4nA

Documentação do Projeto
Descrição Geral
Este projeto é um backend desenvolvido em TypeScript que utiliza o padrão MVC (Model-View-Controller). Ele se conecta a um banco de dados relacional, inclui autenticação JWT e permite a interação com um frontend para gerenciar livros e usuários, além de incluir transações de CRUD e rotas protegidas.

Estrutura de Pastas e Arquivos
A estrutura do projeto foi organizada em conformidade com o padrão MVC e contém os seguintes diretórios e arquivos:

├── src/                # Pasta principal do padrão MVC
│   ├── config/         # Configurações do banco de dados
│   │   └── database.ts # Arquivo de configuração da conexão ao banco de dados
│   ├── controllers/    # Controladores do projeto
│   │   ├── authController.ts  # Controlador de autenticação
│   │   ├── bookController.ts  # Controlador de livros
│   │   └── userController.ts  # Controlador de usuários
│   ├── middleware/     # Middleware do projeto
│   │   └── authMiddleware.ts  # Middleware de autenticação JWT
│   ├── migrations/     # Scripts de criação de tabelas no banco de dados
│   │   └── createUserTable.ts # Script para criar a tabela de usuários
│   ├── models/         # Modelos que representam as tabelas do banco de dados
│   │   └── userModel.ts # Modelo da tabela de usuários
│   ├── repositories/   # Repositórios para interações com o banco de dados
│   │   └── userRepository.ts  # Repositório de usuários
│   ├── routes/         # Definições das rotas da API
│   │   ├── authRoutes.ts  # Rotas relacionadas à autenticação
│   │   ├── bookRoutes.ts  # Rotas relacionadas a livros
│   │   └── userRoutes.ts  # Rotas relacionadas a usuários
│   └── services/       # Camada de lógica de negócios
│       └── userServices.ts # Serviço de lógica de usuários
│   ├── app.ts              # Arquivo principal para inicializar o servidor
│
├── index.js            # Arquivo inicial do Node.js (usado para compatibilidade)
├── README.md           # Documentação do projeto
├── tsconfig.json       # Configuração do TypeScript



Instruções de Instalação e Configuração
Pré-requisitos

- Node.js instalado na máquina.
- Banco de dados PostgreSQL configurado.
- Ferramenta Postman ou similar para testar as rotas.

Instalação
  Clone este repositório:
  bash:
  Copiar código
  git clone <URL_DO_REPOSITORIO>

Instale as dependências:
  Copiar código
  npm install

Configuração
  Crie um arquivo .env na raiz do projeto com o seguinte conteúdo:
  env
  Copiar código
  PORT=3001
  DB_HOST=seu_host
  DB_NAME=seu_banco
  DB_USER=seu_usuario
  DB_PASSWORD=sua_senha
  JWT_SECRET=sua_chave_secreta

Inicie o servidor de desenvolvimento:
  Copiar código
  npm run dev



  Formato das Rotas:
  ### Rotas de Usuários

  | Método | Rota            | Descrição                      |
  |--------|------------------|-------------------------------|
  | GET    | `/api/users`     | Lista todos os usuários.       |
  | POST   | `/api/users`     | Cria um novo usuário.          |
  | PUT    | `/api/users/:id` | Atualiza um usuário existente. |
  | DELETE | `/api/users/:id` | Exclui um usuário.             |

  ### Rotas de Livros

  | Método | Rota            | Descrição                       |
  |--------|------------------|---------------------------------|
  | GET    | `/api/books`     | Lista todos os livros.          |
  | POST   | `/api/books`     | Cria um novo livro.             |
  | PUT    | `/api/books/:id` | Atualiza um livro existente.    |
  | DELETE | `/api/books/:id` | Exclui um livro.                |

  ### Rotas de Autenticação

  | Método | Rota           | Descrição                  |
  |--------|-----------------|----------------------------|
  | POST   | `/auth/login`  | Realiza login e gera token.|

  
  Exemplos Adicionais:
  ### Exemplo de Entrada - POST /api/users
  ```json
  {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "password": "securepassword"
  }
  
  Exemplo de saída - POST /api/users
  json

  {
    "id": 1,
    "name": "John Doe",
    "email": "john.doe@example.com"
  }

