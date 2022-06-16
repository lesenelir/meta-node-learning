// 转换为对象
let fs = require('node:fs')
let globalConf = {}

let conf = fs.readFileSync('./server.conf')
// console.log(conf.toString())
let confs = conf.toString().split('\n')
confs.length = 2

confs.forEach((item) => {
  let itemConf = item.split('=')
  // console.log(itemConf)
  globalConf[itemConf[0]] = itemConf[1]
})

// console.log(globalConf)

module.exports = {
  globalConf
}
