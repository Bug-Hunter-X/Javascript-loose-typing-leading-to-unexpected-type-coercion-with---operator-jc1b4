function foo(a, b) {
  // Type checking to ensure both inputs are numbers
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; 
  } else {
    console.error('Error: Both inputs must be numbers.');
    return null; // Or handle the error appropriately
  }
}

console.log(foo(2, 3)); // 5
console.log(foo(2, "3")); // Error: Both inputs must be numbers.
console.log(foo("2", 3)); // Error: Both inputs must be numbers.
console.log(foo("2", "3")); // Error: Both inputs must be numbers.