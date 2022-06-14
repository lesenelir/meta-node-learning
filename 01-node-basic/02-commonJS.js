/**
 *
 * CommonJS
 *  1. 一个文件就是一个模块，拥有单独的作用域（模块就是一个js文件）
 *  2. 普通方式定义的变量、函数、对象都属于模块内部（当前独立作用域）
 *  3. 模块加载方式：require()
 *  4. 导入方式： exports, module.exports
 *
 *
 *  模块：
 *    核心模块 - Node提供 - 由文件名称确定
 *    文件模块 - 自定义 - 由路径确定
 *
 *  require特征：
 *    加载之后会被缓存
 *
 */

console.log(Buffer)

global.a = 100
console.log(a) // 100
var b = 200
console.log(global.b) // undefined - 每一个模块都有一个单独的作用域，此时b挂载在当前独立作用域内


console.log(arguments) // 可以访问arguments，则每一个文件都有一个单独作用域
/*

;(function (xxx, require, module, __filename, __dirname) {
  // 此处是每一个js文件的内部

})

*/

// 引入require 同步执行
require('./02-index-test') // 文件模块由路径引入
// 如果不 + ./  node会认为是核心模块
// 后缀不写的话： js json node 方式 依次执行


// 直接引入的是一个对象，该对象有导入的属性
const obj = require('./02-index-test')
console.log(obj)


// 解构赋值
const {c, test}   =  require('./02-index-test')
console.log(c, test)

// Note: require 多次的情况下，不会重复的加载


// 引入核心模块方式
const {readFile} = require('fs')
// 读取文件挂载在任务队列中，等同步任务执行完后执行
readFile('./02-index-test.js', 'utf-8', (err, data) => {
  console.log(data)
})
/**
 * npm找依赖包方式：
 *  首先会在node_modules中找包名
 *  再找包名内部的package.json
 *  在package.json中找main键名，没有找index.jsx 对应的入口文件
 */


// exports 和 module.exports 拿的都是同一份引用
console.log(module.exports === exports) // true
