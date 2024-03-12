#!/usr/bin/node
// Author: Bismark-K
exports.esrever = function (list) {
  let i = 0;
  let ln = list.length - 1;

  while ((ln - i) > 0) {
    const aux = list[ln];
    list[ln] = list[i];
    list[i] = aux;
    i++;
    ln--;
  }
  return list;
};
