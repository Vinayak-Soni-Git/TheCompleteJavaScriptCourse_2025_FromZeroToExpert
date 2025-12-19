// class expression
const PersonClass = class{}

// class declaration
class PersonCl{
    constructor(firstName, birthYear){
        this.firstName = firstName
        this.birthYear = birthYear

    }

    calcAge(){
        console.log(2037 - this.birthYear)
    }
}

const jessica = new PersonCl('Jessica', 1996)
console.log(jessica)
jessica.calcAge()

console.log(jessica.__proto__ === PersonCl.prototype)

PersonCl.prototype.greet = function(){
    console.log(`Hey ${this.firstName}`)
}

jessica.greet()
