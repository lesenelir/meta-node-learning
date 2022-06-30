// 引入路由
const Router = require('koa-router')
const router = new Router()

const list = require('./list')
const home = require('./home')
const login = require('./login')


// 路由中间件
router.use('/home', home.routes(), home.allowedMethods())
router.use('/list', list.routes(), list.allowedMethods())
router.use('/login', login.routes(), login.allowedMethods())

// 路由重定向
router.redirect('/', '/home')


// commonjs模块  ->  把router属性挂载到module.exports对象上
module.exports.router = router
