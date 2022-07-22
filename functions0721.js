// Write a function redundant that takes in a string str and returns a function that returns str.


const str = 'bananas'
function  redundant (str){
    return() => str
}

console.log(str)