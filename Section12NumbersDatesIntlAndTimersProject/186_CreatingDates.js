const now = new Date()
console.log(now)

console.log(new Date('Aug 02 2020 18:05:41'))
console.log(new Date('December 24, 2015'))

const movementsDates = [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
]

console.log(new Date(movementsDates[0]))

console.log(new Date(0))
console.log(new Date(3 * 24 * 60 * 60 * 1000))

const future = new Date(2037, 10, 19, 15, 23)
console.log(future)
console.log(future.getFullYear())
console.log(future.getMonth())
console.log(future.getDate())
console.log(future.getDay())
console.log(future.getHours())
console.log(future.getMinutes())
console.log(future.getSeconds())

console.log(future.toISOString())

console.log(new Date(future.getTime()))
