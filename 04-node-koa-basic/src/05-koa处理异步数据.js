const Koa = require('koa')

const app = new Koa()

// 需求：希望得到最终结果：aabbcc，并在第一个中间件渲染
app.use(async (ctx, next) => {
  ctx.message = 'aa'
  await next() // 会等待next之后的中间件异步执行完才会执行await后的语句
  ctx.body = ctx.message
})

app.use((ctx, next) => {
  ctx.message += 'bb'
  next()
})

app.use((ctx) => {
  // 异步代码，如果没有做异步处理，返回aabb
  Promise.resolve('cc').then((data) => {
    ctx.message += data
  })
})

app.listen(5050, () => {
  console.log('Server is running at http://localhost:5050')
})

/**
 * 中间件中如果出现了异步的处理方式，用同步的方式就不行了
 *
 */
