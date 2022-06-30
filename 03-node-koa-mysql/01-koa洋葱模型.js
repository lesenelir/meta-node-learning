// 整个koa项目的入口文件
const Koa = require('koa2') // Koa是一个构造函数

const app = new Koa() // 创建Koa实例

const port = 5050

// 调用中间件
app.use(async (ctx, next) => {
  // 返回数据给页面
  // ctx.response.body = 'Hello'
  console.log(1)
  await next()  // 阻塞执行，直至调用第二个中间件结束后返回
  console.log(1)
})

app.use(async (ctx, next) => {
  console.log(2)
  await next()
  console.log(2)
})

app.use(async (ctx, next) => {
  console.log(3)
  await next()
  console.log(3)
})


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})


/**
 *  Express中间件是顺序执行，从第一个中间件执行到最后一个中间件
 *  Koa是洋葱模型
 */
