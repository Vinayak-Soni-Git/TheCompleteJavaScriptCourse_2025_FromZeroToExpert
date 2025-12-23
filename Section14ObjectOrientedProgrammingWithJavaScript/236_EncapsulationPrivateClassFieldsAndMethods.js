// Encapsulation: Private class fields and methods

class Account{
    // Public fields
    locale = navigator.language;
    bank = 'Bankist';
    #movements = [];
    #pin

    constructor(owner, currency, pin){
        this.owner = owner
        this.currency = currency
        this.#pin = pin
        // this.movements = []
        this.locale = navigator.language

        console.log(`Thanks for opening an account, ${this.owner}`)
    }
    // Public interface
    getMovements(){
        return this.#movements
    }

    deposit(val){
        this.#movements.push(val)
    }

    withdraw(val){
        this.deposit(-val)
    }

    #approveLoan(val){
        return true
    }

    requestLoan(val){
        if(this.#approveLoan(val)){
            this.deposit(val)
            console.log('Loan approved!')
        }
    }
}

const acc1 = new Account('Jonas', 'EUR', 1111)
console.log(acc1)
acc1.deposit(300)
acc1.withdraw(100)
console.log(acc1)

// acc1.approveLoan(1000)
