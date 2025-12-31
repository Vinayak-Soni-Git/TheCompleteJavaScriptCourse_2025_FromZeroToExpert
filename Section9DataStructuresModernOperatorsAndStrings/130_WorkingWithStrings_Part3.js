console.log('a+very+nice+string'.split('+'))
console.log('Jonas Schemedtmann'.split(' '))

const [firstName, lastName] = 'Jonas Schemedtmann'.split(' ')
console.log(firstName, lastName)

const newName = [
    'Mr.',
    firstName,
    lastName.toUpperCase()
].join(' ')
console.log(newName)

const capitalizeName = function (name) {
    const names = name.split(' ')
    const namesUpper = []
    for (const n of names) {
        namesUpper.push(n[0].toUpperCase() + n.slice(1))
        // namesUpper.push(n.replace(n[0], n[0].toUpperCase()))
    }
    console.log(namesUpper.join(' '))
}

capitalizeName('jessica ann smith davis')
capitalizeName('Jonas schemedtmann')

// Padding
const message = 'Go to gate 23'
console.log(message.padStart(25, '+')
    .padEnd(35, '+'))
console.log('Jonas'.padStart(25, '+')
    .padEnd(35, '+'))

const maskCreditCard = function (number) {
    const str = number + ''
    const last = str.slice(-4)
    return last.padStart(str.length, '*')
}

console.log(maskCreditCard(27616238123))
console.log(maskCreditCard(43374238472836423))
console.log(maskCreditCard('1212236872348263'))

const message2 = 'Bad weather... All Departures Delayed...'
console.log(message2.repeat(5))

const planesInLine = function (n) {
    console.log(`There are ${n} planes in the line ${'✈ '.repeat(n)}`)
}

planesInLine(5)
planesInLine(3)
planesInLine(12)
