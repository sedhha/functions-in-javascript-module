// Write a program which takes list of numbers [1,2,3,4] and multilies every number by 2

const numbers = [1, 2, 3, 4];

const multiplyByTwo = (number) => number * 2; // Function Expressions
const multipliedNumbersArray = numbers.map((number) => number * 2);

console.log('Multiplied by two = ', multipliedNumbersArray);
