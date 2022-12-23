const a = (c='네이버')=>{
    return new Promise((resolve, reject) =>{
        throw new Error('[에러났음!1]')     //에러방법1
        reject(new Error('[에러났음!2]'))   //에러방법2
        reject('[내부에러3]')               //에러방법3
        setTimeout(()=>{
            resolve(`${c}로부터 받은 사람`)},1000)
    })
}

a().then(ret=>{return a('카카오')
}).then(ret=>{
    console.log(ret)
}).catch(err=>{
    console.log(err+'발생!!')
})