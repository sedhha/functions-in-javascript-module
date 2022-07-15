// Function Declaration
function microWave(timeInSeconds = 5) {
  // Function Body / Implementation

  // helper function
  console.log('Food is Ready after: ' + timeInSeconds + ' seconds');

  return true; // return value
}

// Calling a Function with Parameter as a Number

const cookingStarted = microWave(2);
console.log('First Process Started = ', cookingStarted);
// Calling a Function without Parameters
const cookingStartedForSecondProcess = microWave();
console.log('Second Process Started = ', cookingStartedForSecondProcess);

// 2*2
