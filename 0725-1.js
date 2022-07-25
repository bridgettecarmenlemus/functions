// Create a function that takes a string of lowercase characters and returns that string reversed and in upper case.

function reverseCapitalize(str) {
	return [...str].reverse().join('').toUpperCase()
}

console.log(reverseCapitalize('pineapple'))