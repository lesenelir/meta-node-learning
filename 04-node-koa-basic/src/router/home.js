const Router = require('koa-router')
const router = new Router()

const db = [
  {id: 1, name: 'lesenelir1', age: 18},
  {id: 2, name: 'lesenelir2', age: 20},
  {id: 3, name: 'lesenelir3', age: 22}
]

// /home?start=18&end=20
router.get('/home', (ctx) => {
  const {start = 0, end = 0} = ctx.query // 解构赋值
  const res = db.slice(start, end)
  ctx.length === 0 ? ctx.throw(404) : ctx.body = res
})

// GET /user/:id 根据id去请求用户
router.get('/home/:id', (ctx) => {
  const id = ctx.params.id
  const res = db.filter((item) => {
    return item.id === id
  })
  ctx.body = res[0]
})


module.exports = router
