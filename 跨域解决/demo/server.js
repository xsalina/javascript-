/*
 * @Date: 2020-08-02 18:06:40
 * @Autor: 肖月萍
 * @Description: 接口
 * @LastEditors: 肖月萍
 * @LastEditTime: 2020-08-02 23:04:49
 */

 const express = require('express');
 const app = express();

//  1.//cors跨域
// var allowCrossDomain = function(req,res,next){
//     //请求源 ajax http:localhost:8080
//     res.header("Access-Control-Allow-Origin", "*");

//     //请求头 x-token
//     res.header("Access-Control-Allow-Headers", "*");

//     //请求方法 get post put delete
//     res.header("Access-Control-Allow-Methods", "*");

//     next();
// }

// app.use(allowCrossDomain);

//2.通过webpack plugin 跨域  webpack-dev-middleware 这个node的中间件，主要就是把前端和后端都放在一个端口运行
let webpack=require('webpack');
let middleWare = require('webpack-dev-middleware');//中间件
let compiler = webpack(require("./webpack.config.js"));
app.use(middleWare(compiler))


 app.get('/user',(req,res) => {
     res.json({name:'xyp'})
 })

 app.listen(3000,()=>{console.log('3000端口 服务启动')})