const job1 = () => {
    return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log('job1')
        resolve('job1')
    },Math.random()*100)
})
}

const job2 = () => {
    return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log('job2')
        resolve('job2')
    },Math.random()*100)
})
}

const job3 = () => {
    return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log('job3')
        resolve('job3')
    },Math.random()*100)
})
}

//job1().then(ret=>job2()).then(ret=>job3())
const main = async ()=>{
    await job1()
    await job2()
    await job3()
}