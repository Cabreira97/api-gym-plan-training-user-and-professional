import express from 'express'
import cors from "cors"
import routes from './routes.js'

import { sequelize } from './databases/conecta.js'
import { Aluno } from './models/Aluno.js'
import { Treino } from './models/Treino.js'
import { Profissional } from './models/Profissional.js'
import { Plano } from './models/Plano.js'


const app = express()
const port = 4000

app.use(express.json())
app.use(cors())
app.use(routes)

async function conecta_db() {
  try {
    await sequelize.authenticate();
    console.log('Conexão com banco de dados realizada com sucesso');
    await Plano.sync()
    await Aluno.sync()
    await Profissional.sync()
    await Treino.sync()

  
    console.log("Ok! Tabelas Plano, Aluno, Profissional e Treino sincronizadas com sucesso")
//    await Reserva.sync();  // cria a tabela no banco (a partir dos modelos - se não existirem)
//    await Reserva.sync({alter: true});  // Verifica se há alterações e atualiza as tabelas se houver
//    await Reserva.sync({force: true});  // recria as tabelas, mesmo se já existirem
  } catch (error) {
    console.error('Erro na conexão com o banco: ', error);
  }
}
conecta_db()

app.get('/', (req, res) => {
  res.send('API Academia')
})

app.listen(port, () => {
  console.log(`Servidor Rodando na Porta: ${port}`)
})