const express = require('express')
const loogger = require('morgan')
const app = express()
const PORT = 3000

/*1번 로직*/
app.use(loogger('tiny'))

app.use((req,res,next)=>{
    console.log('1 Time:', Date.now())
    next();
})

app.use((req,res,next)=>{
    console.log('2 Time:', Date.now())
    next();
})

app.listen(PORT, ()=>{
    console.log(`${PORT}로 접속이 완료되었습니다.`)
})