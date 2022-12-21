const express = require('express')
const logger = require('morgan')
const app = express();
const port = 3000;

app.use(logger('tiny'))
const simple_module = require('./p192_컨트롤러설정하기.js')
app.get('/',simple_module.intro)
app.get('/users/:userName/books/:bookName')     // ' : '은 와일드카드처럼 쓰임. : 뒤에 나오는 것은 에러가 뜨지 않아서 뭐든 넣어도 됨.

app.listen(port,()=>{
    console.log(`${port}완료되었습니다.`)
})