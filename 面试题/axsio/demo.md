/****
 * axios:
 *      是什么？
 *      Axios是一个基于promise的HTTP库，可以用在浏览器和node.js中
 * 
 *      axios有什么特性？
 *          1.从浏览器中创建XMLHttpRequest
 *          2.从node.js创建http请求
 *          3.支持promise API
 *          4.拦截请求和响应
 *          5.转换请求数据和响应数据
 *          6.取消请求
 *          7.自动转换JSON数据
 *          8.客户端支持防御XSRF
 * 
 *   实际上，axios可以用在浏览器和 node.js 中是因为，它会自动判断当前环境是什么，如果是浏览器，就会基于XMLHttpRequests实现axios。如果是node.js环境，就会基于node内置核心模块http实现axios
 * 
 * 简单来说，axios的基本原理就是：
 * 1. axios还是属于 XMLHttpRequest， 因此需要实现一个ajax。或者基于http 。
   2. 还需要一个promise对象来对结果进行处理。
 * 
 * 
 * 
 * 
 * 
 * 
 */