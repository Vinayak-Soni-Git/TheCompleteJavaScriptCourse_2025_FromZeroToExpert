const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
}

console.log(jonas)
console.log(jonas.lastName)
console.log(jonas['lastName'])

const nameKey = 'Name'
console.log(jonas['first' + nameKey])
console.log(jonas['last' + nameKey])

const interestedIn = prompt('What do you want to know about jonas?' +
    ' Choose between firstName, lastName, age, job, and friends')
console.log(jonas[interestedIn])

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn])
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job, and friends')
}

jonas.location = 'Portugal'
jonas['twitter'] = '@jonasschmedtman'
console.log(jonas)

// Challenge
// "Jonas has 3 friends, and his best friend is called Micheal"
console.log(`${jonas.firstName} has ${jonas.friends.length},
 and his best friend is called ${jonas.friends[0]}`)
