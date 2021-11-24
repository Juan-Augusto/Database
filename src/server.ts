import express, { request, response } from 'express';
import routes from './Routes';
const app = express();

app.use(express.json());
app.use(routes);

// app.get("/",(request, response) => {
//     return response.json({mensagem: "Que a pala monstra esteja com você", ano: 2021});

// });

app.listen(3000, () => console.log("Servidor inicializado na porta 3000"));
