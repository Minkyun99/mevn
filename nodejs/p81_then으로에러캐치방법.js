const async1= param=>{
    return new Promise((resolve,reject)=>{
        resolve(param*2)
    })
}

const async2= param=>{
    return new Promise((resolve,reject)=>{
        resolve(param*2)
    })
}

async1(1)
.then(syn)
.then(result=>{
    throw '에러', console.log.log.result
})