// 整个koa项目的入口文件
const Koa = require('koa2') // Koa是一个构造函数

const app = new Koa() // 创建Koa实例
const port = 5050

// 引入路由
const Router = require('koa-router')
const router = new Router()

// 调用中间件
// app.use(async (ctx, next) => {
//   // 返回数据给页面
//   // ctx.response === ctx.body 等价
//   ctx.response.body = 'Hello'
// })

// 路由模块
router.get('/', async (ctx) => {
  ctx.body = '首页'
})

router.get('/list', async (ctx) => {
  ctx.response.body = '列表页'
})

// router.routes()启动路由 ； router.allowedMethods() 允许任何请求(get post put...)
app.use(router.routes(), router.allowedMethods())


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})

