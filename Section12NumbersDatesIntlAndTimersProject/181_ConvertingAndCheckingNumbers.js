console.log(23 === 23.0)
// Base 10 - 0 to 9
// Binary base 2 - 0 and 1
// Octal base 8 - 0 to 7
// Hexadecimal base 16 - 0 to 9 and A to F

console.log(0.1+0.2)
console.log(0.1+0.2 === 0.3)

// Conversion
console.log(Number('23'))
console.log(+'23')

// Parsing
console.log(Number.parseInt('30px', 10))
console.log(Number.parseInt('e23', 10)) // NaN

console.log(Number.parseFloat('2.5rem'))
console.log(Number.parseInt('2.5rem')) // 2

// console.log(parseFloat('2.5rem'))

// check if value is NaN
console.log(Number.isNaN(20))
console.log(Number.isNaN('20'))
console.log(Number.isNaN(+'20x'))
console.log(Number.isNaN(23/0))

// checking if value is number
console.log(Number.isFinite(20))
console.log(Number.isFinite('20'))
console.log(Number.isFinite('+20X'))
console.log(Number.isFinite(23/0))
