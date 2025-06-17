const jonas = {
    firstName:'Jonas',
    lastName:'Schmedtmann',
    birthYear:1991,
    job:'teacher',
    friends:['Michael', 'Peter', 'Steven'],
    hasDriverLicence:true,

    // calcAge:function(birthYear){
    //     return 2037 - birthYear
    // }

    // calcAge:function(){
    //     return 2037-this.birthYear
    // }
    calcAge:function(){
        this.age = 2037 - this.birthYear
        return this.age
    },
    getSummary: function(){
        return `${this.firstName} is a ${this.calcAge()} year old ${jonas.job}, and he has ${this.hasDriverLicence ? 'a':'no'} driver's license`
    }
}

jonas.calcAge()
console.log(jonas.age)
console.log(jonas.age)
console.log(jonas.age)

console.log(jonas.getSummary())
