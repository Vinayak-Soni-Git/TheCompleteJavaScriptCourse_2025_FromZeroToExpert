function logger(){
    console.log('My name is Jonas')
}

logger() // calling / running / invoking the function
logger()
logger()

function fruitProcessor(apples, oranges){
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice;
}

const applesJuice = fruitProcessor(5, 0)
console.log(applesJuice)

console.log(fruitProcessor(5, 0))

const appleOrangeJuice = fruitProcessor(2, 4)
console.log(appleOrangeJuice)

const num = Number('23')
console.log(num)
``
