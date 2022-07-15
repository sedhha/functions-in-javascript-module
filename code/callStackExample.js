// Call Stack Example

function findAllEvenNumbers(numberList) {
  var evenNumbers = [];
  for (var i = 0; i < numberList.length; i++) {
    if (numberList[i] % 2 === 0) {
      evenNumbers.push(numberList[i]);
    }
  }
  return evenNumbers;
}

function divideListByTwo(numbersList) {
  var halfNumbers = [];
  for (var i = 0; i < numbersList.length; i++) {
    halfNumbers.push(numbersList[i] / 2);
  }
  return halfNumbers;
}

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
var evenNumbers = findAllEvenNumbers(numbers);
console.log('Even Numbers = ', evenNumbers);
var halfNumbers = divideListByTwo(evenNumbers);
console.log('Half Numbers = ', halfNumbers);
