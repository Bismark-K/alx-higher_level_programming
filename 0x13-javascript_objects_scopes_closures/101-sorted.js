#!/usr/bin/node
// Author: Bismark-K

const dict = require('./101-data').dict;

const total = Object.entries(dict);
const vaLues = Object.values(dict);
const uniqueValues = [...new Set(vaLues)];
const nD = {};
for (const i in uniqueValues) {
  const theList = [];
  for (const j in total) {
    if (total[j][1] === uniqueValues[i]) {
      theList.unshift(total[j][0]);
    }
  }
  nD[uniqueValues[i]] = theList;
}
console.log(nD);
