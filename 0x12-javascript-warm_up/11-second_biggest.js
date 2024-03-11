#!/usr/bin/node
const myLength = process.argv.length;

// validating arguments
if (myLength <= 3) {
  console.log(0);
} else {
  // Taking the arguments
  const myArguments = process.argv.map(Number).slice(2, process.argv.length)
    .sort((a, b) => a - b);
  console.log(myArguments[myArguments.length - 2]);
}
