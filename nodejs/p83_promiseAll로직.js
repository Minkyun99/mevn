const { resolve } = require("path")

const asy = (message, ret) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(message);
            console.log(new Date());
            resolve(ret)
        },2000)
    })
}

const promises = [asy("비동기함수1발동", 1), asy("비동기함수2발동", 2)]

Promise.all(promises)
.then(data => {
    console.log(data)
})

/*비동기 함수 1발동
(현 시각)
비동기 함수 2발동
(현시각)
[1, 2]*/