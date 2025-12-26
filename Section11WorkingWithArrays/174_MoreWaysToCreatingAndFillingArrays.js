const arr = [1, 2, 3, 4, 5, 6, 7]
console.log(new Array(1, 2, 3, 4, 5, 6, 7))
const x = new Array(7)
console.log(x)

x.fill(1, 3, 5)
console.log(x)

arr.fill(23, 4, 6)
console.log(arr)

const y = Array.from({length:7}, ()=>1)
console.log(y)

const z = Array.from({length:7}, (_, i)=>i+1)
console.log(z)

const movementsUI = Array.from(document.querySelectorAll('.movements_value'))
let balanceLabel
balanceLabel.addEventListener('click', function(){
    const movementsUI = Array.from(document.querySelectorAll('.movements_value'),
        el => Number(el.textContent.replace('EUR', '')))
    console.log(movementsUI)
    const movementUI = [...document.querySelectorAll('.movements_value')]
})
