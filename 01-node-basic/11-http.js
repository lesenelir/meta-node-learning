const http = require('node:http')
const fs = require('node:fs')

// http模块是一个对象
// console.log(http)

// 创建http服务器
const server = http.createServer((req, res) => {
  // console.log(req.url, req.method, req.headers)
  const url = req.url
  const method = req.method

  if (url === '/') {
    res.setHeader('content-Type', 'text/html')
    res.write('<html lang="zh">')
    res.write('<head><title>My Title</title></head>')
    res.write('<body><form action="/message" method="post"><input type="text" name="message"><button type="submit">Submit</button></form></body>')
    res.write('</html>')
    return res.end()
  }

  if (url === '/message' && method === 'POST') {
    const body = []
    req.on('data', (chunk) => {
      console.log(chunk)
      body.push(chunk)
    })
    req.on('end', () => {
      const parseBody = Buffer.concat(body).toString()
      const message = parseBody.split('=')
      fs.writeFile('msg.txt', message)
    })
    res.statusCode = 302
    res.setHeader('Location', '/')
    return res.end()
  }

  // 发送响应
  res.setHeader('content-Type', 'text/html')
  res.write('<html lang="zh">')
  res.write('<head><title>My Title</title></head>')
  res.write('<body><h1>Hello, NodeJS!~~~</h1></body>')
  res.write('</html>')
  res.end()

})

server.listen(3000) // 端口

