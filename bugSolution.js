function myFunction(a, b) {
  if (a === null || a === undefined || b === null || b === undefined) {
    return NaN; // Handle null or undefined values
  }
  return a + b;
}

console.log(myFunction(null, 5)); // Output: NaN
console.log(myFunction(5, null)); // Output: NaN
console.log(myFunction(5, 5)); // Output: 10
console.log(myFunction(undefined, 5)); //Output: NaN