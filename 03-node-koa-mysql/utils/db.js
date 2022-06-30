const mysql = require('mysql')


// 创建mysql 连接池
let pool = mysql.createPool({
  host: 'localhost',
  port: 3306,
  database: 'koa2_demo01',
  user: 'root',
  password: '19970122'
})


// 对数据库进行增删改查操作的基础
function query(sql, callback) {
  pool.getConnection((err, connection) => {
    connection.query(sql, (err, rows) => {
      callback(err, rows)
      connection.release() // 中断连接
    })
  })
}

// query.exports = query
module.exports.query = query
