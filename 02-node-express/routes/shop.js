// 管理用户所看见的路由
const path = require('node:path')

const express = require('express')

const adminData = require('./admin')

const router = express.Router()

router.get('/', (req, res) => {
  // res.send('<h1>Hello, Express!</h1>')
  console.log(adminData.products)
  res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'))
})

module.exports = router
