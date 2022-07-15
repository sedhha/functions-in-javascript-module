/*
    Types of Arrow Functions:
    1. With no Arguments and no Return value
    2. With one Argument but no Return value
    3. With multiple Arguments and no Return value
    4. With one Argument and Return value
    5. With multiple Arguments and Return value
    6. With Return Value as an object
    7. Single Line Return Arrow Function With Return Value as an object
*/

// 1. With no Arguments and no Return value

// Generic Function
const genericarrowFunctionWithNoArgumentsAndNoReturnValue = function () {
  console.log('Generic Function With No Arguments and No Return Value');
};
// Arrow Function Conversion = ???

// 2. With one Argument but no Return value

// Generic Function
const genericarrowFunctionWithOneArgumentButNoReturnValue = function (name) {
  console.log('Generic Function With One Argument But No Return Value');
  console.log('Hello ' + name);
};
// Arrow Function Conversion = ???
const arrowFunctionWithOneArgumentButNoReturnValue = (name) => {
  console.log('Generic Function With One Argument But No Return Value');
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
// Arrow Function Conversion = ???

// 4. With one Argument and Return value

// Generic Function
const genericarrowFunctionWithOneArgumentAndReturnValue = function (name) {
  console.log('Generic Function With One Argument and Return Value');
  return 'Hello ' + name;
};

// Arrow Function Conversion = ???
const arrowFunctionWithOneArgumentAndReturnValue = (name) => {
  console.log('Generic Function With One Argument and Return Value');
  return 'Hello ' + name;
};

// 5. With multiple Arguments and Return value

// Generic Function

// Arrow Function Conversion = ???

// 6. Single Line Return Arrow Function
// Arrow Function Conversion = ???

// 7. Single Line Return Arrow Function With Return Value as an object
// Arrow Function Conversion = ???
