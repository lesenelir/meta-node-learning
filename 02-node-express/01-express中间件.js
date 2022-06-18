/**
 *  express 包含中间件
 *    请求会经过中间件
 *    请求 => 中间件 => 中间件 => 响应
 *    中间件：可以添加多个处理函数来处理请求，可以把不同的处理请求的函数分配到不同的中间件中
 *           中间件中有不同的处理函数来处理函数的请求
 */

const http = require('node:http')

const express = require('express')

// 创建应用 obj
const app1 = express() // express 是一个函数

// 创建中间件
// 中间件是添加到创建服务器之前
// 第一个参数是中间件处理的函数
// req res next; next是一个函数
app1.use('/', (req, res, next) => {
  console.log('中间件')
  next() // next方法进入下一个中间件
})

// 处理不同的路由用use的第一个参数来规范路由
// 通过中间件控制路由在什么地方显示的路由
app1.use('/add-product', (req, res, next) => {
  res.send('<h1>Hello add-product Page</h1>')
  res.send('<form action="/product" method="post"><input type="text" name="title"/><button type="submit">添加产品</button></form>')
  // 此处不写next，找到这个页面就进行响应返回数据
})

app1.use('/', (req, res, next) => {
  console.log('中间件2')
  // 最后一个中间件发送响应
  res.send('<h1>Hello Express</h1>')
})


// 创建服务器
const server = http.createServer(app1)

server.listen(3000)

