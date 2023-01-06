const express = require('express')
const path = require('path')
const logger = require('morgan')
const { Server } = require('socket.io')
const http = require('http')
const app = express()
const server = http.createServer(app)
const io = new Server(server)
// const io = require('soket.io').listen(Server)

const port = 3000
const _path = path.join(__dirname, '/dist')
console.log(_path)

app.use('/', express.static(_path))
app.use(logger('tiny'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/')
})

io.on('connection', (so) => {
  so.on('chat message', (msg) => {
    io.emit('chat message', msg)
  })
})

server.listen(port, () => {
  console.log(port + '에서 서버동작 완료.')
})
