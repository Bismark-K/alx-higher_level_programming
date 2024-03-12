#!/usr/bin/node
// Author: Bismark-K
const list = require('./100-data.js').list;
console.log(list);
console.log(list.map((item, index) => item * index));
