#!/usr/bin/node
const count = process.argv.length;

if (count === 2) {
  console.log('No arguments');
} else if (count === 3) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}
