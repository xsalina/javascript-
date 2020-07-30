/*
 * @Date: 2020-07-30 18:24:48
 * @Autor: 肖月萍
 * @Description: 对象类型、数组类型、类类型  函数类型
 * @LastEditors: 肖月萍
 * @LastEditTime: 2020-07-30 18:29:57
 */


 // 对象类型
 const obj:{
     name:string
     age:number
 } = {
     name:'uuu',
     age:18
 }

 //定义函数类型，且返回值是字符串
 const coomed:()=>string =()=>{return '4'} //const coomed:()=>string =()=>'4'


 //定义数组里面都是字符串
 const arrString:string[]=['小可爱','快乐的小肥羊']


 //类类型
 class Person{}
 const aaa:Person = new Person()//class语法糖
