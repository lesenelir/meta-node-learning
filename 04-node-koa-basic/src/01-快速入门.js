const Koa = require('koa')

const app = new Koa()

// 中间件
// ctx = http请求 + http响应
app.use((ctx) => {
  // ctx 代表 http请求的上下文
  ctx.body = 'hello koa2!'
})

app.listen(5050, () => {
  console.log('Server is running at http://localhost:5050')
})
