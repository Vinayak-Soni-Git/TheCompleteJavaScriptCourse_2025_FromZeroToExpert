const age = 18
const isOldEnough = age >= 18

if(isOldEnough){
    console.log('Sarah can start driving licence')
}else{
    const yearsLeft = 18-age
    console.log(`sarah is too young. Wait another ${yearsLeft} years`)
}

let century
const birthYear = 1991
if(birthYear <= 2000){
    century = 20
}else{
    century = 21
}

console.log(century)
