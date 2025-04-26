const firstName = 'Jonas'
const job = 'teacher'
const birthYear = 1991
const year = 2037

const jonas = "I'm "+ firstName + ', a '+ (year - birthYear) + ' years old ' + job + '!'
console.log(jonas)

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`
console.log(jonasNew)

console.log(jonas === jonasNew)
console.log(`just a regular string`)

console.log('String with \n\ multiple \n\ lines')
console.log(`string
with
multiple
lines`)
