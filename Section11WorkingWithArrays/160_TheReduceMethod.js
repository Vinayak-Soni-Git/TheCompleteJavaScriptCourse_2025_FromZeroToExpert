const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]

// Accumulator === SNOWBALL
const balance = movements.reduce(function (acc, curr, i, arr) {
    return acc + curr
}, 0)
console.log(balance)

const balance2 = movements.reduce((acc, curr) => acc + curr, 0)
console.log(balance2)

const max = movements.reduce((acc, mov) => {
    if (acc > mov) {
        return acc
    } else {
        return mov
    }
}, movements[0])

const maxAgain = movements.reduce((acc, mov) => Math.max(acc, mov), movements[0])
console.log(max, maxAgain)
