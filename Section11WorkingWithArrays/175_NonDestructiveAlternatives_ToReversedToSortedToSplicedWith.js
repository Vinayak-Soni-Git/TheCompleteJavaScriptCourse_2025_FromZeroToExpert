const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]
const reversedMovements = movements.toReversed()
console.log(reversedMovements)

const newMovements = movements.with(1, 2000)
console.log(newMovements)

