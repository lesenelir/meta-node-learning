const path = require('path')

// 返回文件的文件后缀
console.log(path.extname('index.js')) // .js

// 返回文件path路径
console.log(path.dirname('/foo/bar/baz/asdf/quux.html')) // /foo/bar/baz/asdf

// 返回文件path最后一部分（文件）
console.log(path.basename('/foo/bar/baz/asdf/quux.html')) // quux.html

// 当前系统的路径分隔符
console.log(path.sep) // /

console.log(process.env.PATH)

// 路径规范化
console.log(path.normalize('/foo/bar//baz/asdf/quux/..')) // /foo/bar/baz/asdf

// 解析为绝对路径
// 给定的路径序列从右到左进行处理，直至构建一个绝对路径
console.log(path.resolve('/foo/bar', './baz')) // 返回: '/foo/bar/baz'
console.log(path.resolve('/foo/bar', '/tmp/file/')) // 返回: '/tmp/file'
console.log(path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif'))
// 如果当前工作目录是 /home/myself/node，
// 则返回 '/home/myself/node/wwwroot/static_files/gif/image.gif'


// 将路径转换为对象
const obj = path.parse('/home/user/dir/file.txt')
console.log(obj)

// 将对象返回路径字符串
console.log(path.format({
  root: '/ignored',
  dir: './home/usr/dir',
  base: 'file.txt'
}))

