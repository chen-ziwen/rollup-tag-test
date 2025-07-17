# 利用 RollUp 编译出同时支持 ES Module 和 CommonJS 的包

## 测试案例
通过 `npm` 下载该包：

不设置 `type` 时，使用 `require` 导入函数并成功调用。

```js
// 测试 CommonJS
const { test, test2 } = require("rollup-tag-test");
const { hello } = require("rollup-tag-test/util");

test(); // test 111 ===>
test2(); // 222 ===>
hello(); // a ===> { name: 'chiko', age: 12 } chiko 12
```

设置 `type` 为 `module` 时，使用 `import` 导入函数并成功调用。

```js
// 测试 ES Module
import { test, test2 } from "rollup-tag-test";
import { hello } from "rollup-tag-test/util";

test(); // test 111 ===>
test2(); // 222 ===>
hello(); // a ===> { name: 'chiko', age: 12 } chiko 12
```

## 总结
当 `package.json` 中的 `type` 等于 `module` 时， 说明当前的项目导入方式以 `ES Module` 为主。
此时使用 `ES Module` 模块时，后缀直接指定为 `.js` 即可。 但是使用 `CommonJS` 的模块时，后缀必须指定为 `.cjs` 才能运行。
反过来也一样， 当不指定 `type` 时，默认以 `CommonJS` 为主，使用 `Commonjs` 模块时后缀可以直接省略，但是使用 `ES Module` 的模块时，后缀必须指定为 `.mjs` 才能运行。
