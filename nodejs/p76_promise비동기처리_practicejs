const americano = () => {
    return new Promise((resolve, reject)=>{
    const random = (Math.random()*2000)+1000;
    setTimeout(()=>{
        console.log(`${random}초만에 아메리카노 나왔습니다!`)
        resolve('americano')
    },random)
})
}

const latte = () => {
    return new Promise((resolve, reject)=>{
    const random = (Math.random()*3500)+2000;
    setTimeout(()=>{
        console.log(`${random}초만에 라떼 나왔습니다!`)
        resolve('latte')
    },random)
})
}

const cappucino = () => {
    return new Promise((resolve, reject)=>{
    const random = (Math.random*5000)+3000;
    setTimeout(()=>{
        console.log(`${random}초만에 카푸치노 나왔습니다!`)
        resolve('cappucino')
    },random)
})
}

const bienna = () => {
    return new Promise((resolve, reject)=>{
    const random = (Math.random*3000)+2000;
    setTimeout(()=>{
        console.log(`${random}초만에 비엔나 나왔습니다!`)
        resolve('bienna')
    },random)
})
}

//job1().then(ret=>job2()).then(ret=>job3())
americano.then(latte).then(cappucino).then(bienna)
