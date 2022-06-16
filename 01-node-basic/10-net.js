/**
 *  net模块
 *
 *    http模块底层是由net模块而来
 *
 *  五层网络协议：
 *    - 应用层 不同计算机上的进程之间的协议 HTTP FTP SMTP POP3 DNS
 *    - 传输层 TCP UDP
 *      TCP：一对一  UDP：以广播形式针对多个用户，不在乎用户是否接收到
 *    - 网络层 IP协议 ICMP协议
 *    - 数据链路层 PPP SLIP
 *    - 物理层 ISO2110规范
 *
 *  报文
 *    - 报文格式的第一行对应HTTP协议的第一行
 *
 *  net网络模块包含两部分：
 *    - server 服务端
 *    - socket 客户端
 *
 *
 *  server
 *    - 事件：【服务器实例.on】
 *      listening 监听端口后触发的事件
 *      connection 当有客户端请求链接的时候触发
 *         connection中的参数是socket，原因在于：客户端发送的是socket，服务端接收的自然是socket
 *      close 服务器关闭时调用
 *      error 服务器出错时调用
 *    - 方法： 【服务器实例.调用】
 *      listen server监听的端口
 *      close 关闭服务器的方法
 *      address 回调中查看主机的IP，一般没啥作用
 *
 *  socket
 *    - 事件：
 *      connect 链接到服务器时触发
 *      data 接收到数据时触发，一般作参数
 *      end 写入数据完成以后触发
 *      timeout 超时后触发
 *      error
 *      close socket关闭后触发
 *    - 属性：【客户端实例.调用】
 *      remoteAddress 远程服务器的地址
 *      remotePort 原生端口
 *      localAddress 本地地址
 *      localPort 本地端口
 *    - 方法： 【客户端实例.调用】
 *      setTimeout 设置超时时间
 *      write   socket中写入数据
 *      end     写入结束
 *      connect
 *
 *
 */

let net = require('node:net')

let server = net.createServer()
server.listen(12306, '127.0.0.1')

// 服务器连接建立时
server.on('listening', () => {
  console.log('服务启动')
})

// 接收到客户端的请求时触发
server.on('connection', socket => {
  console.log('有新的链接')
  // console.log(socket)

  // 打印http报文 data是buffer报文格式
  // socket参数是浏览器的报文
  socket.on('data', data => { // data是buffer类的报文
    console.log(data.toString())
    // 按照报文格式和浏览器进行交互
    socket.write('HTTP 200OK\r\nContentType: text/html\r\n\r\n<html lang="zh"><body>Hello-Browser</body></html>')

    // 获取url后的内容
    let url = data.toString().split('\n')[0].split(' ')[1]
    console.log(url)
    // 结束客户端请求
    socket.end()
  })

})








// GET / HTTP/1.1
// Host: localhost:12306
// Connection: keep-alive
// Cache-Control: max-age=0
// sec-ch-ua: " Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"
// sec-ch-ua-mobile: ?0
//     sec-ch-ua-platform: "macOS"
// Upgrade-Insecure-Requests: 1
// User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36
// Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9
// Sec-Fetch-Site: none
// Sec-Fetch-Mode: navigate
// Sec-Fetch-User: ?1
// Sec-Fetch-Dest: document
// Accept-Encoding: gzip, deflate, br
// Accept-Language: zh-CN,zh;q=0.9
// Cookie: Webstorm-12e8f052=391f369d-82d5-4dd4-8679-fd6c130548d0
