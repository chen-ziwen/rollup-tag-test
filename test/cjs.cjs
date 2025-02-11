const { test, test2 } = require("../dist/cjs/main.cjs");
const { hello } = require("../dist/cjs/util.cjs");

test()  // hello 111 ===>
test2() // hello 222 ===>
hello() // a ===> { name: 'chiko', age: 12 } chiko 12