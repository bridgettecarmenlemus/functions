// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

function countTrue(arr) {
    let result = 0
    for (let i = 0; i < arr.length; i++) {
        if ((arr [i] == true)){
            result++
        }
    }
    return result
}

console.log(countTrue([true, false, true, false, false, true, true]))