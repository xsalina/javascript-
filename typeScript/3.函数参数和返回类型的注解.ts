/*
 * @Date: 2020-07-30 18:32:16
 * @Autor: 肖月萍
 * @Description: 函数参数和返回类型的注解
 * @LastEditors: 肖月萍
 * @LastEditTime: 2020-07-30 18:52:00
 */


//有返回值是number
 function getTotally(a:number,b:number):number{
    return a + b
 }

 //total是number类型
 const total = getTotally(1,2)

//  void 是没有做什么
 function hh():void{
     console.log(333333)
 }

//never
 function errorFunction():never{
    throw new Error()
    console.log('hello world')
 }

 function forever():never{
     while(true){}
     console.log('hello world')
 }


interface obj{
    a:number
    b:number
}

//函数传递一个对象的时候
//  function addNumber({a,b}:{a:number,b:number}){
//     return a+b
//  }


function addNumber({a,b}:obj){
    return a+b
 }
 const tottly = addNumber({a:2,b:3})

 