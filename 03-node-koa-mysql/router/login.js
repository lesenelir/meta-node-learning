const Router = require('koa-router')
const login = new Router()
const bodyParse = require('koa-bodyparser')
const db = require('../utils/db')
const jwt = require('jsonwebtoken')

// 调用中间件，可以拿到前端post的数据
login.use(bodyParse())

login.post('/register', async (ctx) => {
  let myAccount = ctx.request.body.account,
      myPwd = ctx.request.body.pwd,
      searchSql = `select * from users where account='${myAccount}'`

  // 判断数据库有无数据
  // 有则验证密码，没有则注册数据
  // db是commonjs返回的对象

  // 异步使用data
  let myArr = await new Promise((resolve, reject) => {
    db.query(searchSql, (err, data) => {
      if (err) throw err
      resolve(data)
    })
  })
  if (myArr.length > 0) {
    // 验证密码
    if (myArr[0].pwd === myPwd) {
      ctx.body = {
        msg: '登录成功',
        token: myArr[0].token,
        account: myArr[0].account
      }
    } else {
      ctx.body = {
        msg: '账号或密码错误'
      }
    }
  } else {
    // 注册
    let myToken = jwt.sign({ myAccount: myAccount, myPwd: myPwd }, 'secret', { expiresIn: 3600 })
    let insertSql = `insert into users (account, pwd, token) values ('${myAccount}', '${myPwd}', '${myToken}')`
    let result = new Promise((resolve, reject) => {
      return db.query(insertSql, (err, data) => {
        if (err) throw err
        let obj = {
          msg: '注册成功',
          token: myToken,
          account: myAccount
        }
        resolve(obj)
      })
    })
    ctx.body = result
  }

})

module.exports = login

