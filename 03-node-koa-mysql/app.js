// 整个koa项目的入口文件
const Koa = require('koa2') // Koa是一个构造函数
const path = require('node:path')
const cors = require('koa2-cors')
const static = require('koa-static')

const router = require('./router/index').router

const app = new Koa() // 创建Koa实例
const port = 5050

// 后端允许跨域
// 要写在路由之前
app.use(cors())

app.use(static(path.join(__dirname + '/assets')))

// use就是调用router中间件
// router.routes()启动路由 ； router.allowedMethods() 允许任何请求(get post put...)
app.use(router.routes(), router.allowedMethods())


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})

