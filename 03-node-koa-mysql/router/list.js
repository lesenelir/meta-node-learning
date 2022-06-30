// 列表路由接口
const Router = require('koa-router')
const list = new Router()


// 写对应的接口
list.get('/', async (ctx) => {
  ctx.body = '列表页 - 首页'
})

list.get('/tool', async (ctx) => {
  ctx.body = '列表页 - 工具'
})

list.get('/book', async (ctx) => { // 此处不要遗漏 '/'
  ctx.body = '列表页 - 书籍'
})


// commonjs 另一种写法
module.exports = list
