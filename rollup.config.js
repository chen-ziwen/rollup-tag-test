import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';

// 多入口写法
export default {
    input: {
        main: 'src/main.js',
        util: 'src/util.js',
    },
    output: [
        {
            dir: 'dist/es',
            format: 'es',
            entryFileNames: '[name].mjs',

        },
        {
            dir: 'dist/cjs',
            format: 'cjs',
            entryFileNames: '[name].cjs'
        }
    ],
    plugins: [
        resolve(),
        commonjs(),
        babel({
            babelHelpers: 'bundled', // 使用 babel 将打包的代码转换为 es5
            exclude: 'node_modules/**' // 排除 node_modules
        }),
    ],
};

// 多种写法 但是一旦input设置成对象形式 output 中的file就必须改为dir
// export default [
//     {
//         input: 'main-a.js',
//         output: {
//             file: 'dist/bundle-a.js',
//             format: 'cjs'
//         }
//     },
//     {
//         input: 'main-b.js',
//         output: [
//             {
//                 file: 'dist/bundle-b1.js',
//                 format: 'cjs'
//             },
//             {
//                 file: 'dist/bundle-b2.js',
//                 format: 'es'
//             }
//         ]
//     }
// ];