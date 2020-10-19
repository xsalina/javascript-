/*
 * @,@Date: ,: 2020-10-19 21:50:30
 * @,@Autor: ,: 肖月萍
 * @,@Description: ,:typeScript使用泛型
 * @,@LastEditors: ,: 肖月萍
 * @,@LastEditTime: ,: 2020-10-19 22:06:21
 */

// 定义一个泛型，传值的时候确定你你要传的值。
 function add<T>(first:T,second:T){
    return `${first} ${second}`
 }
 //定义传的值为数字
 const addNumber = add<number>(3,5);
 console.log(777,addNumber) //'3,5'

 //定义传的值为字符串
 const addString = add<string>('4','5');


 //定义两种类型，传值的时候决定第一种是数字类型 第二种是字符串类型
 function manyValue<T,P>(first:T,second:P){
    return `我定义了两种类型，一种T是${first}类型，另一种P是${second}类型`
 }
 const value =  manyValue<number,string>(555,'string')
 console.log(56789,value)


 //定义一个函数，传入的是数字，至于类型T是传值的时候决定是字符串，两者结合就是，数组的值字符串
 function arr<T>(first:Array<T>){
     return first
 }
 const arrrrr = arr<string>(['3','gfgh','hgff'])
 console.log(arrrrr)

 

 
