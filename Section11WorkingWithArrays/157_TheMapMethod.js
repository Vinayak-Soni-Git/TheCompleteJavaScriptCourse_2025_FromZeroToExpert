const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]

const eurToUSD = 1.1
const movementsUSD = movements.map(mov => mov * eurToUSD)

console.log(movements)
console.log(movementsUSD)

const movementsUSDFor = []
for (const mov of movements){
    movementsUSDFor.push(mov * eurToUSD)
}
console.log(movementsUSDFor)

const movementsDescription = movements.map((mov, i)=>
    `Movement ${i+1}: You ${mov > 0 ? 'deposited': 'withdraw'} ${Math.abs(mov)}`
)

console.log(movementsDescription)
