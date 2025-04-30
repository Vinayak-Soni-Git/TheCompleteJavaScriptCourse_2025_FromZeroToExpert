const hadDriversLicense = true
const hadGoodVision = true

console.log(hadDriversLicense && hadGoodVision)
console.log(hadDriversLicense || hadGoodVision)
console.log(!hadDriversLicense)

const shouldDrive = hadDriversLicense && hadGoodVision

if(shouldDrive){
    console.log('Sarah is able to drive')
}else{
    console.log('Someone else should drive...')
}

const isTired = false
console.log(hadDriversLicense && hadGoodVision && isTired)

if(hadDriversLicense && hadGoodVision && !isTired){
    console.log('Sarah is able to drive')
}else{
    console.log('Someone else should drive...')
}
