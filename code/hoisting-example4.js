// Hoisting Example
console.log('A = ', a);
console.log('MultiplyByTwo = ', multiplyNumberByTwo);
console.log('Multiply 4 by 2 = ', multiplyNumberByTwo(4));

let a = 10;

var multiplyNumberByTwo = function (number) {
  console.log('Result = ', result);
  var result = number * 2;
  return result;
};
