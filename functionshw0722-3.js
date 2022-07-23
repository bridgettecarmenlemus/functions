// Create a function which takes a array arr of integers as an argument. This function must return another function, which takes a single integer as an argument and returns a new array.

// The returned array should consist of each of the elements from the first array multiplied by the integer.

plop =[1,2,3]

function multiply (arr) {
    for (let i = 0; i < arr.length; i++)
    return arr.map(i => {return i * 10})
}

console.log(multiply (plop))