'use strict'

const Person = function(firstName, birthYear){
    this.firstName = firstName
    this.birthYear = birthYear
}

Person.prototype.calcAge = function(){
    console.log(2037 - this.birthYear)
}

const jonas = new Person('Jonas', 1991)
const matilda = new Person('Matilda', 2017)
const jack = new Person('Jack', 1975)

jonas.calcAge()
matilda.calcAge()
jack.calcAge()

console.log(jonas.__proto__)
console.log(jonas.__proto__ === Person.prototype)
console.log(Person.prototype.isPrototypeOf(jonas))
console.log(Person.prototype.isPrototypeOf(Person))

Person.prototype.species = 'Homo Sapiens'
console.log(jonas.species, matilda.species)

console.log(jonas.hasOwnProperty('firstName'))
console.log(jonas.hasOwnProperty('species'))

console.log(jonas.__proto__)
// Object.prototype (top of prototype chain)
console.log(jonas.__proto__.__proto__)
console.log(jonas.__proto__.__proto__.__proto__) // null

console.dir(Person.prototype.constructor)

const arr = [3, 6, 4, 5, 6, 9, 9]
console.log(arr.__proto__)
console.log(arr.__proto__ === Array.prototype)

Array.prototype.unique = function(){
    return [...new Set(this)]
}

console.log(arr.unique())

const h1 = document.querySelector('h1')
console.dir(h1)
console.dir(x=>x+1)
