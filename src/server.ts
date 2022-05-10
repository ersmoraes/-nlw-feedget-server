import express from 'express'
import cors from 'cors';
import { routes } from './routes';

const app = express();

// GET, POST, PUT, PATCH, DELET

// GET = Buscar informações
// POST = Cadastrar informações
// PUT = Atualizar informações de uma entidade
// PATCH = Atualizar um informação única de uma entidade
// DELET = Deletar informações

app.use(express.json());
app.use(routes);
app.use(cors())

app.listen(process.env.PORT || 3333, () => {
  console.log('HTTP server running!');
})

