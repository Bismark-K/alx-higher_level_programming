#!/usr/bin/node
const firstNumber = parseInt(process.argv[2]);
const secondNumber = parseInt(process.argv[3]);

const total = add(firstNumber, secondNumber);
console.log(total);

// adding the numbers
function add (a, b) {
  const sum = a + b;
  return sum;
}
