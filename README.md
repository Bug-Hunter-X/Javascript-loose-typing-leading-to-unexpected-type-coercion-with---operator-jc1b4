# Javascript loose typing leading to unexpected type coercion with + operator
This repository demonstrates a common Javascript bug caused by loose typing and the + operator. When using the + operator with a mix of numbers and strings, Javascript will perform string concatenation instead of numerical addition. This behavior can lead to unexpected results and errors in your code.
The `bug.js` file shows the unexpected behavior, while the `bugSolution.js` file offers a solution using type checking to ensure correct addition.
## How to reproduce the bug
1. Clone this repository.
2. Open `bug.js` and run the code. You'll observe the unexpected concatenated results.
3. Open `bugSolution.js` and run the code to see the corrected numerical addition.
## Bug explanation
Javascript's dynamic typing system allows variables to hold different data types without explicit declarations. However, this can lead to subtle errors when using the + operator, which behaves differently depending on its operands' types. If either operand is a string, the operator concatenates the operands as strings. This unexpected string concatenation can cause logic errors in your program.
## Solution
The solution involves using explicit type checking before performing addition.  This ensures the numbers are added correctly instead of being treated as strings.
This example underscores the importance of careful type handling in Javascript to prevent unexpected behavior and ensure code correctness.