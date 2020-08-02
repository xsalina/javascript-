/*
 * @Date: 2020-08-02 17:38:43
 * @Autor: 肖月萍
 * @Description: webpack配置文件
 * @LastEditors: 肖月萍
 * @LastEditTime: 2020-08-02 23:04:59
 */

const path = require('path');//依赖包
const htmlWebpackPlugin = require('html-webpack-plugin');//引入
module.exports = {
    mode:'development',
    //入口模块化
    entry:'./src/index.js',
    output:{
        filename:'index.js',
        path:path.resolve(__dirname,'dist'),//__dirname表示当前路径 ，当前路径下创建dist文件夹
        publicPath:'/'//资源路径
    },
    // 3.devServer: {//代理，解决了生产环境的跨域，线上的不行
    //     proxy: {
    //         "/api": {
    //             "target": "http://localhost:3000",
    //             "changeOrigin": true
    //         }
    //     }
    // },
    plugins:[//相当于 index.html引入了打包之后dist下面的index.js
        new htmlWebpackPlugin({
            filename:'index.html',
            template:'index.html'
        })
    ]
}