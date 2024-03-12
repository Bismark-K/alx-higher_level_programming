#!/usr/bin/node
// Author: Bismark-K

exports.converter = function (base) {
  return function (num) {
    return num.toString(base);
  };
};
