
    const url = 'https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWUSD'
const value = () => {
    return new Promise((resolve, reject)=>{
        fetch(url)
        .then((response)=>{return response.json()})
        .then(data=>{
            resolve(data[0].basePrice)
        })
    })
}