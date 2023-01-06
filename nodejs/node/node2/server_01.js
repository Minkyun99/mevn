const express = require('express')
const path = require('path')
const logger = require('morgan')
const fs = require('fs')
const { info } = require('console')

const app = express()
const port = 3000
const _path = path.join(__dirname, '/dist')
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
// let arr = []
// let inform = {}

app.post('/text', function (req, res) {
  const name = req.body.iname
  const age = req.body.iage
  const data = req.body.idata
  const file = 'info'

  fs.stat(_path + name + '.txt', (err, stats) => {
    console.log(stats ? '파일이 존재합니다.' : '파일이 없습니다.')

    if (stats) {
      ;`<script>alert(${name}.txt 파일이 이미 존재합니다.)</script>`
      fs.writeFile(
        _path + name + '.txt',
        `이름 : ${name} 나이 : ${age} 특이사항 : ${data}`,
        (e) => {
          if (e) {
            console.log(e)
          }
          res.send(`이름 : ${name}, 나이 : ${age}, 특이사항 : ${data}`)

          console.log('파일이 작성 완료 되었습니다.')
        }
      )
    } else {
      ;`<script>alert(${name}.txt 파일이 저장되었습니다.)</script>`
    }
  })
})

app.listen(port, () => {
  console.log(port + '에서 서버동작 완료.')
})

// const A = JSON.parse(localStorage.getItem('save'))
// arr.push(A)

// fs.writeFile(
//   _path + file + '.txt',
//   `이름 : ${name} 나이 : ${age} 특이사항 : ${data}`,
//   (e) => {
//     if (e) {
//       console.log(e)
//     }
//     res.send(`이름 : ${name}, 나이 : ${age}, 특이사항 : ${data}`)

//     console.log('파일이 작성 완료 되었습니다.')
//   }
// )

// Object.assign(inform, {
//   이름: name,
//   나이: age,
//   특이사항: data
// })

// arr.push(inform)
// const B = JSON.stringify(arr)
// window.localStorage.setItem('save', B)
