console.log('Test start')
setTimeout(()=>{
    console.log('0 sec time')
}, 0)

Promise.resolve('resolved promise 1').then(res => console.log(res))
console.log('Test end')
