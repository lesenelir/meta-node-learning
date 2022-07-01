const Router = require('koa-router')
const router = new Router()

const login = require('./login')
const posts = require('./posts')

router.use('/login', login.routes(), login.allowedMethods())
router.use('/posts', posts.routes(), posts.allowedMethods())

module.exports = router
