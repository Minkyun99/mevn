console.log("Hi!")
setTimeout(function timeout() {
    console.log("async function1 complete")
},5000)

setTimeout(function timeout() {
    console.log("async function2 complete")
},5000)

console.log('kundo!')

/*
Hi!
kundol!
async function1 complete
async function2 complete
*/

/* http://latentflip.com/loupe/ -> 여기서 확인해보기! *///