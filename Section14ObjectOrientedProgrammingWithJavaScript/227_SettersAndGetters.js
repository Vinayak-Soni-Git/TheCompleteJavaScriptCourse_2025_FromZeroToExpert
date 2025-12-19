const account = {
    owner: 'Jonas',
    movements: [200, 530, 120, 300],

    get latest(){
        return this.movements.slice(-1).pop()
    },

    set latest(movement){
        this.movements.push(movement)
    }
}
console.log(account.latest)
account.latest = 50
console.log(account.movements)
