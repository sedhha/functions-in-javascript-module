/*

Arrow Function Syntax
const <ArrowFunctionName> = (<ArgumentList>) => { <Body> }
Types of Arrow Functions:
// 1. With no Arguments and no Return value
// 2. With one Argument but no Return value
// 3. With multiple Arguments and no Return value
// 4. With one Argument and Return value
// 5. With multiple Arguments and Return value
// 6. Single Line Return Arrow Function
// 7. Single Line Return Arrow Function With Return Value as an object
*/

// 1. With no Arguments and no Return value

// Generic Function
const genericarrowFunctionWithNoArgumentsAndNoReturnValue = function () {
  console.log('Generic Function With No Arguments and No Return Value');
};
// Arrow Function Conversion
const arrowFunctionWithNoArgumentsAndNoReturnValue = () => {
  console.log('Arrow Function With No Arguments and No Return Value');
};

// 2. With one Argument but no Return value

// Generic Function
const genericarrowFunctionWithOneArgumentButNoReturnValue = function (name) {
  console.log('Generic Function With One Argument But No Return Value');
  console.log('Hello ' + name);
};
// Arrow Function Conversion
const arrowFunctionWithOneArgumentButNoReturnValue = (name) => {
  console.log('Arrow Function With One Argument But No Return Value');
  console.log('Hello ' + name);
};

// 3. With multiple Arguments and no Return value

// Generic Function
const genericarrowFunctionWithMultipleArgumentsAndNoReturnValue = function (
  name,
  age
) {
  console.log('Generic Function With Multiple Arguments and No Return Value');
  console.log('Hello ' + name + ' and your age is ' + age);
};

// Arrow Function Conversion
const arrowFunctionWithMultipleArgumentsAndNoReturnValue = (name, age) => {
  console.log('Arrow Function With Multiple Arguments and No Return Value');
  console.log('Hello ' + name + ' and your age is ' + age);
};

// 4. With one Argument and Return value

// Generic Function
const genericarrowFunctionWithOneArgumentAndReturnValue = function (name) {
  console.log('Generic Function With One Argument and Return Value');
  return 'Hello ' + name;
};
// Arrow Function Conversion
const arrowFunctionWithOneArgumentAndReturnValue = (name) => {
  console.log('Arrow Function With One Argument and Return Value');
  return 'Hello ' + name;
};

// 5. With multiple Arguments and Return value

// Generic Function
const genericarrowFunctionWithMultipleArgumentsAndReturnValue = function (
  name,
  age
) {
  console.log('Generic Function With Multiple Arguments and Return Value');
  return 'Hello ' + name + ' and your age is ' + age;
};
// Arrow Function Conversion
const arrowFunctionWithMultipleArgumentsAndReturnValue = (name, age) => {
  console.log('Arrow Function With Multiple Arguments and Return Value');
  return 'Hello ' + name + ' and your age is ' + age;
};

// 6. Single Line Return Arrow Function

// Generic Function
const multiplyByTwo = function (array) {
  return array.map(function (element) {
    return element * 2;
  });
};
// Arrow Function Conversion
const arrowFunctionmultiplyByTwo = (array) =>
  array.map((element) => element * 2);

// 7. Single Line Return Arrow Function With Return Value as an object

// Generic Function
function getNameAndAddress(name, address) {
  return {
    name: name,
    address: address,
  };
}

// Arrow Function Conversion
const getNameAndAddressArrowFunction = (name, address) => ({
  name: name,
  address: address,
});

// Main Function

// Single Line Return Arrow Function With Return Value as an object

// Generic
console.log(
  'Result From Generic Function: ',
  getNameAndAddress('Shivam', 'XYZ Street')
);

// Arrow
console.log(
  'Result From Arrow Function: ',
  getNameAndAddressArrowFunction('Shivam', 'ABC Street')
);
