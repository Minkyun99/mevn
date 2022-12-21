/*구글 nodejs express 검색*/
//시작하기 -> hello world 예제
//http://localhost:3000/ 주소창에 입력해서 hello world 확인하기!

const express = require('express')
const app = express()
const port = 3000       //3000번 포트에서 시작함

app.get('/', (req, res) => {
  res.send('강사님.....')
})

app.get('/main', (req, res)=>{
    res.send('시빈님 ㄱㄱㄱㄱ')
})

app.get('/main/login',(req, res)=>{
  req.send('age=30')
  res.send('id')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})