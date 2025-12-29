// Promise.race
(async function () {
    const res = await Promise.race([
        getJSON(`https://restcountries.eu/rest/v2/name/italy`),
        getJSON(`https://restcountries.eu/rest/v2/name/egypt`),
        getJSON(`https://restcountries.eu/rest/v2/name/maxico`)
    ])
    console.log(res[0])
})()

const timeout = function (sec) {
    return new Promise(function (_, reject) {
        setTimeout(function () {
            reject(new Error('Request took too long!'))
        }, sec * 1000)
    })
}

Promise.race([
    getJSON(`https://restcountries.eu/rest/v2/name/italy/tanzania`),
    timeout(5)
])
    .then(res => console.log(res[0]))
    .catch(error => console.error(error))

// Promise.allSettled
Promise.allSettled([
    Promise.resolve('Success'),
    Promise.reject('Error'),
    Promise.resolve('Another Success')
])
    .then(res => console.log(res))

// Promise.all
Promise.all([
    Promise.resolve('Success'),
    Promise.reject('Error'),
    Promise.resolve('Another Success')
])
    .then(res => console.log(res))
    .catch(err => console.log(err))

// Promise.any [ES2021]
Promise.any([
    Promise.resolve('Success'),
    Promise.reject('Error'),
    Promise.resolve('Another Success')
])
    .then(res => console.log(res))
    .catch(err => console.log(err))
