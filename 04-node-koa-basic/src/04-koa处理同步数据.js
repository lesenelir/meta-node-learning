const Koa = require('koa')

const app = new Koa()

// 需求：希望得到最终结果：aabbcc，并在第一个中间件渲染
app.use((ctx, next) => {
  ctx.message = 'aa'
  next()
  ctx.body = ctx.message
})

app.use((ctx, next) => {
  ctx.message += 'bb'
  next()
})

app.use((ctx) => {
  // 同步代码
  ctx.message += 'cc'
})

app.listen(5050, () => {
  console.log('Server is running at http://localhost:5050')
})
