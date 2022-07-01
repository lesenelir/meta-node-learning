const express = require('express')
const jwt = require('jsonwebtoken')
const e = require("express");
/**
 * 使用jwt目的：使得某些路由是受保护的路由
 *
 */
const app = express()

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Express'
  })
})

app.get('/api', (req, res) => {
  res.json({
    message: 'Welcome to ApI',
    userID: req.userData.userId // 1
  })
})

app.post('/api/posts',  verifyToken, (req, res) => {
  res.json({
    message: 'Post created...'
  })
})

// token值来源
app.post('/api/login', (req, res) => {
  const user = {
    id: 1,
    username: 'lesenelir',
    email: 'i@lesenelir.me'
  }
  // 第二个参数是secret
  const token = jwt.sign({userId: user.id, email: user.email}, 'secret', {expiresIn: '30s'})
  res.json({
    userId: user.id,
    email: user.email,
    token
  })
})


function verifyToken(req, res, next) {
  // Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImVtYWlsIjoiaUBsZXNlbmVsaXIubWUiLCJpYXQiOjE2NTY2ODAwMjl9.oOshwxoYt9gJgj9u_9DFAa70HdkMMpkNDhfziceejmE
  const bearerHeader = req.headers['authorization']
  if (bearerHeader) {
    const bearer = bearerHeader.split(' ')
    const bearerToken = bearer[1]
    const decodedToken = jwt.verify(bearerToken, 'secret')
    req.userData = {userId: decodedToken.userId}
    next()
  } else {
    res.status(403).json('Auth failed')
  }
}


app.listen(6060, () => {
  console.log('Server is running at http://localhost:6060')
})
