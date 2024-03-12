#!/usr/bin/node
// Author: Bismark-K
let numArg = 0;

exports.logMe = function (item) {
  console.log(numArg + ': ' + item);
  numArg++;
};
