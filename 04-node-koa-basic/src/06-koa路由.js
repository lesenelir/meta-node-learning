const Koa = require('koa')

const app = new Koa()

// 路由写法：根据url的不同，返回不同的内容

// 路由原生写法
// ctx是http请求上下文 - ctx是一个对象
app.use((ctx, next) => {
  console.log(ctx)
  // ctx.request: http请求
  // ctx.response: http响应
  if (ctx.request.url === '/') {
    ctx.body = '这是主页'
  } else if (ctx.request.url === '/users') {
    if (ctx.request.method === 'GET') {
      ctx.body = '这是用户页'
    } else if (ctx.request.method === 'POST') {
      ctx.body = '创建用户'
    } else {
      ctx.status = 405
    }
  } else {
    ctx.status = 404
  }
})

app.listen(5050, () => {
  console.log('Server is running at http://localhost:5050')
})

/**
 * 路由：建立URL和中间件之间的对应关系
 *
 */
