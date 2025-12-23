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
        // not chainable
    }

    deposit(val){
        this.#movements.push(val)
        return this
    }

    withdraw(val){
        this.deposit(-val)
        return this
    }

    #approveLoan(val){
        return true
    }

    requestLoan(val){
        if(this.#approveLoan(val)){
            this.deposit(val)
            console.log('Loan approved!')
        }
        return this
    }
}

const acc1 = new Account('Jonas', 'EUR', 1111)
const movements = acc1.deposit(300)
    .withdraw(100)
    .withdraw(50)
    .requestLoan(25000)
    // .getMovements()
    .withdraw(4000)

console.log(movements)
