const http = require('http')
const PORT = 12010
const server = http.createServer((req,res)=>{
    res.setHeader('content-type', 'text/plain; charset=utf-8')
    const obj = {"이름" : "홍길동"}
    res.end(JSON.stringify(obj))
})

/*일부러 에러를 만듬*/
setTimeout(()=>{
    JSON.parse("{z")
},1000)


server.listen(PORT,()=>{
    console.log(`${PORT}의 포트에서 서버가 가동됨`)
})

