const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]
console.log(movements.includes(-130))
console.log(movements.some(mov => mov === -130))

const anyDeposits = movements.some(mov => mov > 1500)
console.log(anyDeposits)

const positiveMovements = [430, 1000, 700, 50, 90]
console.log(positiveMovements.every(mov => mov > 0))

const deposit = mov => mov > 0
console.log(movements.some(deposit))
console.log(movements.every(deposit))
console.log(movements.filter(deposit))
