const Koa = require('koa')
const app = new Koa()

const useRoute = require('./router/user')

app.use(useRoute.routes(), useRoute.allowedMethods())

app.listen(5050, () => {
  console.log('Server is running at http://localhost:5050')
})
