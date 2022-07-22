// Write a function redundant that takes in a string str and returns a function that returns str.

const redundant = str => () => str;

console.log(redundant (''))