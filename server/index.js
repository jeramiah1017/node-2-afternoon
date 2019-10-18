const express= require('express')
const server_port = 3001
const app = express()
app.use(express.json())
const change = require ('./controllers/messages_controller')

const messageURL = "/api/messages"
app.post(messageURL, change.create)
app.put(`${messageURL}/:id`, change.update)
app.delete(`${messageURL}/:id`, change.delete)
app.get(messageURL, change.read)

app.listen(server_port, ()=> console.log(`${server_port} Hey I think I'm working!`))
