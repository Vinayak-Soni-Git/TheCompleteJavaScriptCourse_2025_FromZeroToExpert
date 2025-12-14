const italianFoods = new Set([
    'pasta',
    'gnocci',
    'tomatoes',
    'olive oil',
    'garlic',
    'basil'
])

const mexicanFoods = new Set([
    'tortillas',
    'beans',
    'rice',
    'tomatoes',
    'avocado',
    'garlic',
])

const commonFoods = italianFoods.intersection(mexicanFoods)
console.log(`intersection: ${commonFoods}`)
console.log([...commonFoods])

const italianMexicanFusion = italianFoods.union(mexicanFoods)
console.log(italianMexicanFusion)

console.log([...new Set([...italianFoods, ...mexicanFoods])])

const uniqueItalianFoods = italianFoods.difference(mexicanFoods)
console.log(uniqueItalianFoods)

const uniqueMexicanFoods = mexicanFoods.difference(italianFoods)
console.log(uniqueMexicanFoods)

const uniqueItalianAndMexicanFoods = italianFoods.symmetricDifference(mexicanFoods)
console.log(uniqueItalianAndMexicanFoods)

console.log(italianFoods.isDisjointFrom(mexicanFoods))
