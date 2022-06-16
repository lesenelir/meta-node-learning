// 服务器
let net = require('node:net')

let server = net.createServer()
server.listen(12306, '127.0.0.1')

// on 用来监听对应的事件
server.on('listening', () => {
  // 监听服务器启动则调用
  console.log('服务器启动')
})

// 服务器接收到客户端的请求时
server.on('connection', (socket) => {
  // 监听客户端请求则调用
  console.log('有新链接')

  // 服务器接收到data数据返回data数据
  socket.on('data', data => { // data是buffer
    console.log(data.toString())
  })

  // 服务器向客户端建立 连接
  socket.write('hello client')

  // socket 关闭
  socket.on('close', () => {
    console.log('客户端已经关闭')
    server.close()
  })
})

server.on('close', () => {
  console.log('服务器已关闭')
})

