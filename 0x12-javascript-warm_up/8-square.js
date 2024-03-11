#!/usr/bin/node
const printTimes = process.argv[2];
const checkArg = parseInt(printTimes);

squares(checkArg);

function squares (size) {
  // print the squares
  for (let i = 0; i < size; i++) {
    let r = '';
    for (let j = 0; j < size; j++) {
      r += 'X';
    }
    console.log(r);
  }
}
