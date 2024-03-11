#!/usr/bin/node
const number1 = parseInt(process.argv[2]);

// Output
console.log(fact(number1));

// factorial function
function fact (n) {
  if (n === 1 || n === 0) {
    return 1;
  } else {
    return n * fact(n - 1);
  }
}
