import { Request, Response } from 'express';
import knex from '../database/connection';
export default {
    async create(req: Request, res: Response){
        const {nome, cpf} = req.body; //preservação do objeto
        const data = {cpf, nome} //criação do objeto
        await knex('tab_cadastro').insert(data);//insira o obejto na tabela
        return res.status(201).json({data:data});
    },
    async list(req: Request, res: Response){
        var result = await knex('tab_cadastro').orderBy('nome'); //abstração de todos os processos necessários para inserção de dados
        return res.status(200).json({data:result});
    },
    async find(req: Request, res: Response){
        const {id}= req.params;
        var user = await knex('tab_cadastro').where({id});
        return res.status(200).json(user);

    },
    async update(req: Request, res: Response){
        const {id} = req.params; //atraves das requisições de parametros = ID
        const {nome, cpf} = req.body;
        const data = {cpf, nome};
        await knex('tab_cadastro').update(data).where({id});
        const cadastro = await knex('tab_cadastro').update(data).where({id});

        return res.status(200).json({data:cadastro})
    },
    async delete(req: Request, res: Response){
        const {id} = req.params; //atraves das requisições de parametros = ID
        await knex('tab_cadastro').del().where({id});

        return res.status(200).json({message: 'Registro excluído com sucesso!'})
    }
}
