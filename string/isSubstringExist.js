// Check if Substring Exists: You can use a method to determine if a string contains a specific word or phrase.
// Before
// declaring a string variable
const text = "I love hot chocolate!";
console.log("Before: " + text);

// After
// checking if a specific substring exist in the string
// checking for "hot" substring and displaying the result as true or false
let result = text.includes("hot");
console.log("Does the substring exists? " + result);
