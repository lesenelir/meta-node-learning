const fs = require('fs')
fs.readFile('./02-commonJs.js', 'utf8',(err, data) => {
  if (err) console.log(err)
  console.log(data) // 打印的是buffer
  // 使用utf8 方式将buff转换为toString
  console.log(data.toString())
})

// 同步写法可以把结果保存在一个变量中
// let res = fs.readFileSync('./02-commonJs.js', 'utf8')
// console.log(res)


