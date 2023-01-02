const express = require('express')
const path = require('path')
const logger = require('morgan')
const fs = require('fs')
const { info } = require('console')
const { ErrorCodes } = require('vue')
const { Script } = require('vm')

const app = express()
const port = 3000
const _path = path.join(__dirname, '/')
console.log(_path)

app.use('/', express.static(_path))
app.use(logger('tiny'))

app.use(express.json())
app.use(
  express.urlencoded({
    extended: true
  })
)

//CRUD

app.post('/text', function (req, res) {
  const name = req.body.iname
  const age = req.body.iage
  let tt = new Date()
  const file = 'info'

  fs.appendFile(_path + 'info.txt', age + '\t(' + tt + ')\n', (errs) => {
    if (err)
      throw ErrorCodes.send(
        `<script>alert("${name}.txt 파일 저장완료!");history,go(-1)</script>`
      )
  })
})

app.get('/list', (req, res) => {
  fs.readFile(_path + file + '.txt', 'utf-8', (err, data) => {
    //파일이 없으면 생성하고 내용추가 있으면 그냥 추가
    if (err) throw errconsole.log(data)
    res.send(data)
  })
})

app.listen(port, () => {
  console.log(port + '에서 서버동작 완료.')
})
