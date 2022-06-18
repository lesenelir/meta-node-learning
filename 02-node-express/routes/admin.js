/**
 *  routes 处理特定的请求
 *
 */

// 管理产品创建路由
const path = require('node:path')

const express = require('express')

const products = []

const router = express.Router() // 迷你express应用可以插入到别的express中

// router上注册路由
// /admin/add-product
router.get('/add-product', (req, res) => {
  // res.send('<form action="/product" method="post"><input type="text" name="title"/><button type="submit">添加产品</button></form>')
  res.sendFile(path.join(__dirname, '../views/add-product.html'))
})

// /admin/product
router.post('/product', (req, res) => {
  products.push({title: req.body.title}) // req.body 请求体参数存入数组
  res.redirect('/')
})


// Node中导出多个对象
module.exports = {
  routes: router,
  products
}
