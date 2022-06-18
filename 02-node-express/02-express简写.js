const express = require('express')
const bodyParser = require('body-parser')

const app = express()

// 中间件
// 第二个参数都是中间件处理函数
// app.use
// app.post
// app.get
// ...
app.use(bodyParser.urlencoded({extended: false}))

app.use('/add-product', (req, res) => {
  res.send('<form action="/product" method="post"><input type="text" name="title"/><button type="submit">添加产品</button></form>')
})

app.use('/product', (req, res) => {
  console.log(req.body)
  res.redirect('/')
})

app.use('/', (req, res) => {
  res.send('<h1>Hello Express</h1>')
})



// 创建服务器
app.listen(3000)
