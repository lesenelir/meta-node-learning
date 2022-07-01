const Koa = require('koa')

const app = new Koa()

app.use((ctx, next) => {
  console.log(1)
  next()
  console.log(2)
})

app.use(async (ctx, next) => {
  console.log(3)
  await next() // Koa中next返回的是一个promise
  console.log(4)
})

app.use((ctx, next) => {
  console.log(5)
  ctx.body = '123'
})


app.listen(5050, () => {
  console.log('Server is running at http://localhost:5050')
})

/**
 * 洋葱模型：
 *    - 递归思想：逐级深入，然后返回
 *    1
 *    3
 *    5
 *    4
 *    2
 */
