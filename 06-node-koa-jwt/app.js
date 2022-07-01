const Koa = require('koa')
const app = new Koa()
const router = require('./router/index')

app.use(router.routes(), router.allowedMethods())

app.listen(6060, () => {
  console.log('Server is running at http://localhost:6060')
})
