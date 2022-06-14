// Nodejs是什么
//   - 事件驱动、非阻塞式IO操作的模型的运行环境 、 跨平台  （正常IO操作比较费时）


// 前后端的分离标准是：网络前和网络后
// 后端分层：
//  1. web层 controller：权限校验，封装，用户提示，高并发、高性能
//  2. 业务逻辑层 server：处理后端处理的业务
//  3. DAO层 data access object：处理数据库操作
//  4. 持久层 数据库：关系型数据库mysql oracle、非关系型数据库 MongoDB Redis HBase

/**
 *  前端运行软件：
 *    浏览器、安卓（Java Python C++ C#）、IOS（C++ Object-c）
 *  服务端软件：
 *    linux
 *    Java、Python、C++、C#、Nodejs
 *
 *
 *  计算机语言和编程语言：
 *    计算机语言：HTML（标记语言）
 *    编程语言：
 *      1. 机器语言 - 二进制码（机器码） 0, 1
 *      2. 汇编语言 - 面向处理器
 *      3. 高级语言 - 可读性增加
 *        Java比C更高级原因：变量回收、进程管理，Java有垃圾回收机制，C要手动释放内存
 *        NodeJs比Java更高级原因：线程池
 *
 *
 *  Node编译过程：
 *    1. 词法分析（分词 tokenizing）
 *      - 识别关键字 var function ...
 *      - 分析标识符 var a = 1; function test(){}
 *      - 分界标识符 空格 划分界限
 *      - 运算标识符 + - * / 二进制运算符： ^ 按位异或运算  | 按位或运算符  & 按位与运算符
 *    2. 语法分析（语法 parsing）
 *      - 语法抽象树 Abstract Syntax Tree (AST)
 *    3. 语义分析（代码生成）
 *      - 把AST转换成目标平台（操作系统）可执行的二进制码
 *
 *
 *  NodeJs和 JS 是一种语言码？ --> 不是 （语义分析阶段不一致）
 *
 *
 *  I/O input/output -> ram硬盘中的输入和输出 + rom内存中的输入和输出
 *    IO是磁盘的读写操作
 *    读写到磁盘或者内存中的地方对应的数据库： 关系型数据库 mysql（存放磁盘中） / 非关系型数据库 mongoDB Redis(存储内存)
 *
 *
 *  I/O 操作非常的费时
 *    时间是ns（纳秒）10E-9s GB/s
 *    ram 硬盘 ms（毫秒）10E-3s  MB/s
 *
 *
 *  阻塞IO和非阻塞IO =============> IO操作费时 所以有存在阻塞IO (时间驱动模型)
 *    非阻塞IO：（异步非阻塞模型）
 *      readFile() // 不会阻塞操作，通过异步挂起IO操作的任务队列
 *      console.log(1)
 *    阻塞IO：等待IO完成才进行下一步操作
 *      readFileAsync()
 *      console.log(1)
 *
 *
 *  IO密集和CPU密集
 *    IO密集：文件操作，http网络请求，数据库操作
 *    CPU密集：压缩和解压，加密和解密，绘图
 *
 *
 *  Node诞辰：2009-03 Ryan dah1
 *    NodeJs 是节点 最开始解决的问题： 用事件驱动的方式解决阻塞IO的情况
 *
 *  NodeJs 不是单线程
 *    - Nodejs 有一个主线程来实现多线程模式
 *  前端JS 是单线程 （避免DOM冲突）
 *
 *
 *  单线程问题：
 *    1. 多核CPU性能浪费 child_process
 *    2. 阻塞代码的运行
 *
 *
 *  Node 可以做 后端Web层高并发、高性能的请求，作为一个中间件接收请求，然后交给后端
 *  Node 可以写前端的构建工具，比如webpack
 *
 *
 */
console.log(1)
