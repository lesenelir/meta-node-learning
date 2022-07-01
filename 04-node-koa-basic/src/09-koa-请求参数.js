const Koa = require('koa')
const app = new Koa()

const homeRoute = require('./router/home')

app.use(homeRoute.routes(), homeRoute.allowedMethods())

app.listen(5050, () => {
  console.log('Server is running at http://localhost:5050')
})
