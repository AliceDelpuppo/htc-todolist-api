import express, { request, response } from 'express'
import http from 'http'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

const server = http.createServer(app)

const PORT = process.env.PORT

console.log(PORT)

app.use(express.json())

const task = {
    id: '1',
    name: 'Lava a louça',
    done: true
}

const taskList = [task]

app.get('/task', (request, response) => {
    response.send(taskList)
})

// Cadastra coisas
// Request são as informações que o usuário passa
app.post('/task', (request, response) => {
    const body = request.body

    taskList.push(body)

    response.send(taskList)
})

// Criar uma rota de teste (dessa forma é mais fácil para testar)
app.get('/ping', (request, response) => {
    response.send('pong') // responder. Enviar a resposta para o front
})

server.listen(PORT, () => { // 3333 é a porta
    console.log('iniciou o server')
})
