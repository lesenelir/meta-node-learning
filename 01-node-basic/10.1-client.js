// 客户端

let net = require('node:net')

let socket = net.connect(12306, '127.0.0.1')

// 想服务器建立连接
socket.on('connect', () => {
  console.log('已经连接到服务器')
})

socket.write('hello server')

// 读取服务器传给客户端的数据
socket.on('data', data => {
  console.log(data.toString())
  socket.end() // 半关闭 写入结束
})

//
socket.on('close', () => {
  console.log('连接已关闭')
})
