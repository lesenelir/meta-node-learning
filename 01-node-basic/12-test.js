const a = 1

let obj = {
  name: 'lesenelir'
}

// module.exports = { // 导出整个对象
//   a: 2,
//   b: 3
// }

// exports.a = 1  等价于 module.exports.a = 1
// 不能通过 exports 导出整个对象

// 通过module.exports 实际上导出的是一个对象
// 通过require拿到的是一个对象，可以通过对象上的属性来进行访问
// module.exports = a  这样导出拿到是一个值
module.exports = {
  obj,
  a
}
