const Router = require('koa-router')
const jwt = require("jsonwebtoken")
const login = new Router()

/**
 * jwt - 路由鉴权目的： 保证访问某些路由是受到保护的，不是随意在url上输入就可以随意访问
 * login 是通过jwt 生成token
 *
 */

login.get('/', async (ctx) => {
  ctx.body = 'Hello'
})

const user = {
  id: 1,
  username: 'lesenelir',
  email: 'i@lesenelir.me'
}

// Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImVtYWlsIjoiaUBsZXNlbmVsaXIubWUiLCJpYXQiOjE2NTY2ODcxNjAsImV4cCI6MTY1NjY5NDM2MH0.v03fXDG5aw41WMfbiqxmtuLObLm725nMaJAbUBrwuMI
login.post('/', async (ctx) => {
  // 通过jwt生成用户名的秘文
  const token = jwt.sign(
      {userId: user.id, email: user.email},
      'secretKey',
      {expiresIn: '2h'}
  )
  ctx.body = {
    userId: user.id,
    email: user.email,
    token
  }
})

module.exports = login
