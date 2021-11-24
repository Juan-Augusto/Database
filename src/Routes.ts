import {Router} from 'express';
import CadastroController from './controller/CadastroController'

const routes = Router();

routes.post("/cadastros", CadastroController.create)

routes.put("/cadastros/:id", CadastroController.update)//passagem de parametro para alterar dados selecionados

routes.get("/cadastros", CadastroController.list)

routes.get("/cadastros/:id", CadastroController.find)

routes.delete("/cadastros/:id", CadastroController.delete)



export default routes;