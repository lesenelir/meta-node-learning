const Router = require('koa-router')
const home = new Router()
const db = require('../utils/db')

// 写对应接口
home.get('/', async (ctx) => {
  ctx.body = '首页'
})

home.get('/banner', async (ctx) => {
  // 访问数据库，检索banner表
  // db.query(`select * from banner`, (err, data) => {
  //   if (err) throw err
  //   console.log(data)
  // })
  // ctx.body = '首页 - 轮播图'
  // 异步，保证先读取完数据库的内容，再返回前端
  let myData = await new Promise((resolve, reject) => {
    return db.query(`select * from banner`, (err, data) => {
      if (err) throw err
      data.map(value => {
        value.imgUrl = 'http://localhost:5050'+value.imgUrl
      })
      resolve(data)
    })
  })
  ctx.body = myData
})

home.get('/footer', async (ctx) => {
  ctx.body = '首页 - 底部'
})

module.exports = home
