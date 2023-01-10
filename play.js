const express = require('express')
const path = require('path')
const logger = require('morgan')
const { Server } = require('socket.io')
const http = require('http')
const app = express()
const server = http.createServer(app)
const io = new Server(server)
// const io = require('soket.io').listen(Server)

require('dotenv').config()
const port = 3000
const _path = path.join(__dirname, './vue/vue_pr08/dist')
console.log(_path)

app.use('/', express.static(_path))
app.use(logger('tiny'))

const NAVER_CLIENT_ID = process.env.ID
const NAVER_CLIENT_SECRET = process.env.SECRET

let api_url = 'https://openapi.naver.com/v1/papago/n2mt'

const request = require('request')

io.on('connection', (socket) => {
  socket.on('trans', (msg) => {
    let options = {
      url: api_url,
      form: { source: 'ko', target: 'en', text: msg },
      headers: {
        'X-Naver-Client-Id': NAVER_CLIENT_ID,
        'X-Naver-Client-Secret': NAVER_CLIENT_SECRET
      }
    }
    request.post(options, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        const rst = JSON.parse(body)
        io.emit('trans', rst.message.result.translatedText)
      } else {
        console.log('error = ' + response.statusCode)
      }
    })
  })
})

server.listen(port, () => {
  console.log(port + '에서 서버동작 완료.')
})
