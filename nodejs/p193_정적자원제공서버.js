const express = require('express')
const logger = require('morgan')
const app = express();
const port = 3000;

app.use('/', express.static('p193'))
app.use(logger('tiny'))
//커스텀 미들웨어

// app.use((req, res, next)=>{
//     console.log('요청이 왔네요. 지나갑니다~')
//     next()
// })

app.listen(port,()=>{
    console.log(port+'로 연결 되었습니다.')
})