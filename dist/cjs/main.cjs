'use strict';

// 利用 rollup 打包成两种文件格式
var test = function test() {
  console.log("test 111 ===>");
};
var test2 = function test2() {
  console.log("test 222 ===>");
};

exports.test = test;
exports.test2 = test2;
