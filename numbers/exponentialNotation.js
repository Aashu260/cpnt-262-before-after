// Exponential Notation: There's a method that allows you to express numbers in scientific notation (e.g., 1.23e+5).

// Before
// declaring the variable and printing it out
const numValue = 33.1324;
console.log("Before exponential value: " + numValue);

// After
// expressing the number to scientific notation
console.log("After changing the number to exponential value: ");

// here (2) represents the number of digits that appear after the decimal
console.log(numValue.toExponential(2));

//similar to the above example 4 represents number of digits after the decimal
console.log(numValue.toExponential(4));
