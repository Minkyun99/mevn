const exp = require('express')
const path = require('path')
const logger = require('morgan')
const app = exp()

const PORT = 3000;

const _path = path.join(__dirname, 'p193')
console.log(_path)

// app.use((req, res, next)=>{
//     console.log('요청이 왔네요~ 지나갑니다~')
//     next()
// })

// app.get('/', (res,req)=>{
//     res.send('dkdkddidisjlfajas')
// })
// app.get('/',(req, res) =>{
//     res.send('get됨')
//   })
// app.get('/hi', (req, res) =>{
//     res.send('hi됨')
//   })

app.use('/', exp.static(_path))
app.use(logger('tiny'))
//커스텀 미들웨어


app.get('/dist/:Gugudan', (req,res)=>{
    const {Gugudan} = res.params
    res.send(`<h1>입력한 정답은 ${Gugudan}이군요!<h1>아쉽게도 지금 제 실력으로는 정답을 알려드릴 수 없어요ㅠㅠ</h1>`)
})

app.listen(PORT, ()=>{
    console.log(`너의 서버는? ${PORT}!`)
})

