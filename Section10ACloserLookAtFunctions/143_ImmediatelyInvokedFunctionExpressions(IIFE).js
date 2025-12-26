const runOnce = function(){
    console.log('this will never run again')
};
runOnce();

(function(){
    console.log('This will never run again')
})();

(()=>console.log('this will also never call again'))()

{
    const isPrivate = 20;
    var notPrivate = 40
}

// console.log(isPrivate)
console.log(notPrivate)
