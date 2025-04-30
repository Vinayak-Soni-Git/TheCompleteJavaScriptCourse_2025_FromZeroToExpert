// const scoreDolphins = (96+108+89)/3
// const scoreKoalas = (88+91+110)/3
// console.log(scoreDolphins, scoreKoalas)
//
// if(scoreDolphins > scoreKoalas){
//     console.log("Dolphins win the trophy!")
// }else if(scoreKoalas > scoreDolphins){
//     console.log("Koalas win the trophy")
// }else if(scoreDolphins === scoreDolphins){
//     console.log('Both win the trophy!')
// }

const scoreDolphins = (97+112+101)/3
const scoreKoalas = (109+95+123)/3

if(scoreDolphins > scoreKoalas && scoreDolphins >= 100){
    console.log("Dolphins win the trophy!")
}else if(scoreKoalas > scoreDolphins && scoreKoalas >= 100){
    console.log("Koalas win the trophy")
}else if(scoreDolphins === scoreDolphins && scoreDolphins >= 100 && scoreKoalas >= 100){
    console.log('Both win the trophy!')
}else{
    console.log('No one wins the trophy')
}
