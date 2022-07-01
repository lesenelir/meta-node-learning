const Koa = require('koa')

const app = new Koa()

app.use((ctx, next) => {
  console.log('Header')
  next()
})

app.use((ctx, next) => {
  console.log('Footer')
  next()
})

app.use((ctx) => {
  console.log('Finish')
  // 最后一次返回response 响应体内容
  ctx.body = '中间件结束'
})

app.listen(5050, () => {
  console.log('Server is running at http://localhost:5050')
})

/**
 * app.use 实际上会返回this，支持链式调用
 *
 * 中间件就是在请求和响应之间的函数
 *
 * Koa中一个use只能注册一个中间件（只能有一个处理函数）
 */
