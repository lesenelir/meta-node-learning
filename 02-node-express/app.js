const path = require('node:path')

const express = require('express')
const bodyParser = require('body-parser')

const adminData = require('./routes/admin') // 引入导出的对象，该对象有两个值对象
const shopRoutes = require('./routes/shop')

const app = express()

// 模版引擎
app.set('view engine', 'ejs')
app.set('views', 'views')

// 中间件
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public'))) // 静态资源

// 中间件 考虑路由
app.use('/admin',adminData.routes)
app.use(shopRoutes)
// 404 中间件
app.use((req, res, next) => {
  // res.status(404).send('<h1>404 Page</h1>')
  res.status(404).sendFile(path.join(__dirname, './views/404.html'))
  // res.status(404).render('404', {pageTitle: '页面走丢了'})
})

// 创建服务器
app.listen(3000)
