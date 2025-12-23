'use strict'

const Person = function (firstName, birthYear) {
    this.firstName = firstName
    this.birthYear = birthYear
}

Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear)
}

class PersonCl {
    constructor (firstName, birthYear) {
        this.firstName = firstName
        this.birthYear = birthYear

    }

    calcAge () {
        console.log(2037 - this.birthYear)
    }
    static hey(){
        console.log('Hey there')
    }
}

const jonas = new Person('Jonas', 1991)
const matilda = new Person('Matilda', 2017)
const jack = new Person('Jack', 1975)

Person.hey = function () {
    console.log('Hey there')
    console.log(this)
}

Person.hey()
