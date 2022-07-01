const Router = require('koa-router')
const jwt = require('jsonwebtoken')
const posts = new Router()

posts.get('/', async (ctx) => {
  ctx.body = '11'
})

posts.post('/', verifyToken, async (ctx) => {
  ctx.body = {
    message: 'Post created...'
  }
})

function verifyToken(ctx, next) {
  const bearerHeader = ctx.headers['authorization']
  if (bearerHeader) {
    const bearer = bearerHeader.split(' ')
    const bearerToken = bearer[1]
    // 通过jwt进行验证， 第二个参数是秘钥key
    const decodedToken = jwt.verify(bearerToken, 'secretKey', {expiresIn: '2h'})
    ctx.userData = {userId: decodedToken.userId}
    next()
  } else {
    ctx.status = 403
    ctx.body = 'Auth failed'
  }
}


module.exports = posts
