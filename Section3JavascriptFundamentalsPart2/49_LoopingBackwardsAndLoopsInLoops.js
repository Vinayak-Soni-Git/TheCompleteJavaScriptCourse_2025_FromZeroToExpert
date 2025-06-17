const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Micheal', 'Peter', 'Steven'],
]

for(let i=jonas.length;i>=0;i--){
    console.log(i, jonas[i])
}

for(let exercise =1;exercise<4;exercise++){
    console.log(`starting exercise ${exercise}`)
    for(let rep=1;rep<6;rep++){
        console.log(`Exercise ${exercise}: Lifting weights repetition ${rep}`)
    }
}
