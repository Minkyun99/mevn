require('dotenv').config()
const express = require('express')
const history = require('connect-history-api-fallback')
const path = require('path')
const logger = require('morgan')
const { createProxyMiddleware } = require('http-proxy-middleware')
const VSchema = require('./mdb.cjs')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(
  createProxyMiddleware('/v1', {
    target: 'https://openapi.naver.com',
    changeOrigin: true
  })
)

const port = 3000
const _path = path.join(__dirname, './vdb/dist')

app.use('/', express.static(_path))
app.use(logger('tiny'))

/*MongoDB CRUD*/
/*CRUD에서 Create*/
app.post('/dbc', (req, res) => {
  const title = req.body.title
  const content = req.body.content
  const date = req.body.date

  ;(async () => {
    const _data = { title, content, date }
    const vs = await new VSchema(_data)
    const t = await vs.save()
    console.log(t)
    res.send('input_data_successful')
  })()
})
/*CRUD에서 Read*/
app.get('/dbr/:date', (req, res) => {
  //작성한 몽고DB 불러오기(get)
  const date = req.params.date //path 형식
  const read = async () => {
    const t = await VSchema.find({ date }, { _id: 0, __v: 0 })
      .lean() //속도 개선
      .then((t) => {
        res.send(t)
        console.log(t)
      }) //mongoose 때문에 버전이 자동으로 보임. __v:0을 하면 안 보임.
  }
  read()
})
/*CRUD에서 Update*/
app.post('/dbu', (req, res) => {
  ;(async () => {
    const t = await VSchema.updateOne(
      {
        date: req.body.date
      },
      {
        $set: {
          title: req.body.title,
          content: req.body.content,
          date: req.body.date
        }
      },
      { upsert: true }
    )
    console.log(t)
    res.send('updata_complete')
  })()
})
/*CRUD에서 Delete*/
app.post('/dbd', (req, res) => {
  const date = req.params.date
  const t = VSchema.deleteOne({
    date: { $eq: date }
  }).then((t) => {
    console.log(t)
    res.send('delete_complete')
  })
})

app.listen(port, () => {
  console.log(port + '에서 서버동작 완료.')
})
