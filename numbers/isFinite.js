// Check if Finite: Determine if a number is finite (not infinity or negative infinity) using a specific method.
// Before
// declaring the variable and printing its value
let number = 3.14159;
console.log("Given number: " + number);

// After
let numCheck = Number.isFinite(number); // checking the number if its finite or not
console.log("Is number finite? " + numCheck);
