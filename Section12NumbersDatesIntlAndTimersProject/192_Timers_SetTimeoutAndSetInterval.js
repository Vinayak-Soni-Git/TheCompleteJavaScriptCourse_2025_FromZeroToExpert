setTimeout(() => console.log('Here is your pizza 🍕'), 4000)

const ingredients = ['olives', 'spinach']
const pizzaTimer = setTimeout((ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2}`),
    3000, ...ingredients)

if(ingredients.includes('spinach')) clearTimeout(pizzaTimer)

const interval = setInterval(function(){
    const now = new Date()
    console.log(now)
}, 2000)

setTimeout(()=>{
    clearInterval(interval)
}, 5000)
