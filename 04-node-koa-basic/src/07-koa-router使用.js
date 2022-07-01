const Koa = require('koa')
const app = new Koa()

const Router = require('koa-router')
const router = new Router()

// 编写路由规则
router.get('/', ctx => {
  ctx.body = '这是首页'
})

router.get('/users', (ctx) => {
  ctx.body = '这是用户页'
})

router.post('/users', (ctx) => {
  ctx.body = '创建用户'
})

// 注册中间件
app.use(router.routes(), router.allowedMethods())

app.listen(5050, () => {
  console.log('Server is running at http://localhost:5050')
})

/**
 * 路由：建立URL和中间件之间的对应关系
 */
