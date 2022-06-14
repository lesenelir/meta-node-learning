console.log('测试引入 require')

const c = 100
function test() {
  console.log(c)
}

module.exports = { // 可以省略module
  c,
  test
}
