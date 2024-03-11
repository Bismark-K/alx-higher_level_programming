#!/usr/bin/node
const startWord = 'My number: ';
const input = Math.floor((process.argv[2]));

if (!isNaN(input)) {
  console.log(startWord + input);
} else {
  console.log('Not a number');
}
