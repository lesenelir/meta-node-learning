const Router = require('koa-router')
const router = new Router()

router.get('/users', (ctx) => {
  ctx.body = '这是用户页'
})

router.post('/users', (ctx) => {
  ctx.body = '创建用户'
})

module.exports = router
