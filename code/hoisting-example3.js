// Hoisting Example
console.log('A = ', a);

var a = 10;

const multiplyNumberByTwo = function (number) {
  var result = number * 2;
  console.log('Result = ', result);
  return result;
};

multiplyNumberByTwo(4);
