import { test, test2 } from "../dist/es/main.mjs"
import { hello } from "../dist/es/util.mjs"

test()  // hello 111 ===>
test2() // hello 222 ===>
hello() // a ===> { name: 'chiko', age: 12 } chiko 12