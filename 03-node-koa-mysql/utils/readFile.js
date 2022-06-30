const fs = require('node:fs')
const path = require('node:path')


function readFile(arg) {
  return new Promise((resolve, reject) => {
    let myPath = path.join(__dirname, `../assets/${arg}.txt`)
    // 异步函数
    fs.readFile(myPath, (err, data) => {
      if (err) throw err
      console.log(data.toString()) // Buffer 二进制流 转 字符串
    })
  })
}

readFile('react')
