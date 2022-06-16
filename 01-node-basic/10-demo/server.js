// 搭建简单服务器
const {globalConf} = require('./config')
const net = require('node:net')
const fs = require('node:fs')

// console.log(globalConf)
let server = net.createServer()

server.listen(globalConf.port, '127.0.0.1')

server.on('listening', () => {
  console.log('server is running')
})

server.on('connection', (socket) => {
  socket.on('data', (data) => {
    // data.toString().split('\n')[0] 是一个数组
    // console.log(data.toString().split('\n')[0].split(' ')[1])
    // 拿url
    let url = data.toString().split('\n')[0].split(' ')[1]

    try {
      let dataFile = fs.readFileSync(__dirname + globalConf.path + url)
      // console.log(dataFile.toString())=
      socket.write('HTTP 200OK\r\n\r\n')
      socket.write(dataFile)

    } catch (e) {
      // 浏览器请求的url路径不对时，请求这个路径
      socket.write('HTTP 404NotFound\r\n\r\n<html lang="zh"><body><h1>Not Found Resource</h1></body></html>')
    }
    socket.end()
  })
})
