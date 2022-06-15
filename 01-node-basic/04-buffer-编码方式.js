/**
 *
 * 字符集和字符编码
 *  - 字符集：ASCII unicode 8bit对应一个字符
 *  - 字符编码： UTF-32
 *    buffer 默认的字符编码是UTF-8
 *    字符编码决定字符长度
 *
 *
 * Buffer 用于处理TCP流、文件系统操作、以及其他上下文中与八位字节流进行交互
 *            处理TCP流、文件系统操作都是 基于二进制数据流操作
 *            将数据进行编码为二进制数据，进行传输，传输结束后再进行解码呈现
 *
 * Buffer：用于操作二进制数据流
 *  - <Buffer 74 65 73 74>
 *  - 实例类似于整数（0-255用16进制的方式）的数组，大小是固定的
 *
 * 二进制流 - 内存空间
 *
 *
 *
 */
// import { Buffer } from 'node:buffer';
// const {Buffer} = require('buffer')

// iconv iconv-lite 编码方式
const buf = Buffer.from('test')
console.log(buf)


// 创建长度为10的未初始化缓冲区
const buf1 = Buffer.alloc(10)
console.log(buf1)

// 创建长度为 10 的缓冲区，
// 使用值为 `1` 的字节填充。
const buf2 = Buffer.alloc(10, 1)
console.log(buf2)

// 创建长度为10的未初始化的缓冲区
const buf3 = Buffer.allocUnsafe(10)
console.log(buf3)


const str = 'www'
const buf4 = Buffer.allocUnsafe(str.length)
for (let i = 0; i < str.length; i++) {
  buf4[i] = str.charCodeAt(i)
}
console.log(buf4)
console.log(buf4.toString('ascii'))


