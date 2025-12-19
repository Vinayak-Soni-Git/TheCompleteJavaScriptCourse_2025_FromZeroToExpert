const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function(value, key, map){
    console.log(`${key}: ${value}`)
})

const currencyUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR'])
console.log(currencyUnique)

currencyUnique.forEach(function(value, _, map){
    console.log(`${value}: ${value}`)
})
