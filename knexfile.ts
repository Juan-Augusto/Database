// configuração banco de dados
import path from 'path'; //importação do próprio core do node
export default{
    development:{
        client: 'mysql2',
        connection: {
            host: 'localhost',
            user: 'root',
            password:'32442905Juan!',
            database: 'teste'
        },
        migrations: {
            tablename: 'knex_migrations',
            directory: path.resolve(__dirname, 'src', 'database', 'migrations')
        },
        seeds: { //feedbacks das migrations realizadas
            directory: path.resolve(__dirname, 'src', 'database', 'seeds')
        }

    }
}