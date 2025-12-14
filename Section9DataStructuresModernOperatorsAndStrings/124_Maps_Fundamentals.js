const rest = new Map()
rest.set('name', 'Classico Italiano')
rest.set(1, 'Firenze, Italy')
console.log(rest.set(2, 'Lisbon, Portugal'))

rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']).set('Open', 11).set('close', 23).set('true', 'We are open :D').set('false', 'we are close :(')

console.log(rest.get('name'))
console.log(rest.get(true))
console.log(rest.get(1))

const time = 21
console.log(rest.get(time > rest.get('open') && time < rest.get('close')))

console.log(rest.has('categories'))
rest.delete(2)
console.log(rest)
console.log(rest.size)

rest.clear()

console.log(rest)
console.log(rest.size)
const arr = [1, 2]
rest.set(arr, 'Test')
rest.set(document.querySelector('h1'), 'heading')

console.log(rest.get(arr))
