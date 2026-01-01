const number = 3884764.23

const options = {
    style: 'unit',
    unit: 'mile-per-hour'
}

const options2 = {
    style: 'currency',
    currency: 'EUR'
}

console.log('US:', new Intl.NumberFormat('en-US', options).format(number))
console.log('Germany:', new Intl.NumberFormat('de-DE', options).format(number))

console.log('Syria:', new Intl.NumberFormat('ar-SY', options2).format(number))
console.log(navigator.language, new Intl.NumberFormat(navigator.language, options2).format(number))
