const db = require('./db')
console.log(db)

let arr = [
  {id: 1, imgUrl: '/images/koa-test1.png'},
  {id: 2, imgUrl: '/images/koa-test2.png'}
]

// 数组循环，把数据插入到mysql的banner表中
arr.map((item) => {
  let sql = `insert into banner values (${item.id},'${item.imgUrl}')`;
  db.query(sql, (err, data) => {
    if (err) throw err
    console.log(data)
  })
})
