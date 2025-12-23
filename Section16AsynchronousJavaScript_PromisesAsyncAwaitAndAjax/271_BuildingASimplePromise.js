const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        if (Math.random() >= 0.5) {
            resolve('Operation resolved')
        } else {
            resolve(new Error('Operation rejected'))
        }
    }, 2000)
})
promise.then(res => console.log(res)).catch(err => console.error(err))

const wait = function(seconds){
    return new Promise(function(resolve){
        setTimeout(resolve, seconds*1000)
    })
}
wait(1).then(()=>{
    console.log('I waited for 1 seconds')
    return wait(1)
}).then(()=>console.log('I waited for 1 seconds'))
