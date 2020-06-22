import express from 'express';
import cors from 'cors';
import routes from './routes';
import path from 'path';

// ... : Indica a falta da definição de tipos
//  npm install @types/express -D
const app = express();
// Rotas : 
// Recursos : 
// Métodos Http:
app.use(cors());
app.use(express.json());

app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..','uploads')));

app.listen(3333);