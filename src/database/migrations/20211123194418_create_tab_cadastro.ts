import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return await knex.schema.createTable('tab_cadastro', (table) =>{
        //"cria uma tabela"
        table.increments('id').unique();
        //"atributo de auto incremento do tipo id"
        table.specificType('cpf', 'VARCHAR(11)').notNullable().unique();
        table.specificType('nome', 'VARCHAR(50)').notNullable();
        //"SE ABSTRAI DE SINTAXE DO BANCO"
    })
}


export async function down(knex: Knex): Promise<void> {
    return await knex.schema.dropTable('tab_cadastro');
}

