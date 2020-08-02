/*
 * @Date: 2020-08-02 17:39:52
 * @Autor: 肖月萍
 * @Description: Do not edit
 * @LastEditors: 肖月萍
 * @LastEditTime: 2020-08-02 22:14:54
 */

 let xhr = new XMLHttpRequest();
 xhr.open('get','/user',true);
 xhr.onload = function(){
     console.log(xhr.response)
 }
 xhr.send()
