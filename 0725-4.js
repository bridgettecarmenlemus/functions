// Complete the function that returns the lyrics for the song 99 Bottles of Beer as an array of strings: each line should be a separate element - see the example at the bottom.
// Note: in order to avoid hardcoded solutions, the size of your code is limited to 1000 characters

function sing(x){
    for (let i = x; i > 0 ; i--){
    console.log(` ${i} bottles of beer on the wall, ${i} bottles of beer.
    Take one down and pass it around, ${i-1} bottles of beer on the wall`)
} console.log( 'No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.')
}

(sing (98))
