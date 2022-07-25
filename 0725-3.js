// Create a function which returns the number of true values there are in an array.

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