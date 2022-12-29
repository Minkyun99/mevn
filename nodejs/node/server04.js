const express = require('express')
const path = require('path')
const logger = require('morgan')

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

app.post('/info', function (res, req) {
  const id = req.body.iid
  const password = req.body.ipw
  const data = req.body.idata
  res.send('확인되었습니다.')
  console.log(id, password, data)
})

app.listen(port, () => {
  console.log(port + '에서 서버동작 완료.')
})
