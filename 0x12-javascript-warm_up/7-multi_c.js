#!/usr/bin/node
const x = parseInt(process.argv[2]);
let i = 0;

// Checking to see if the argument can be converted
if (!isNaN(x)) {
  console.log('Missing number of occurrences');
} else {
  // printing C is fun x times
  while (i < x) {
    console.log('C is fun');
    i++;
  }
}
