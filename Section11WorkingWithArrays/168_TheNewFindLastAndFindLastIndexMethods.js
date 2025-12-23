const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]
const lastWithdrawal = movements.findLast(mov => mov < 0)
console.log(lastWithdrawal)

const latestLargeMovementIndex = movements.findLastIndex(mov => Math.abs(mov) > 1000)
console.log(latestLargeMovementIndex)
console.log(`Your latest large movements was ${movements.length - latestLargeMovementIndex} movements ago`)
