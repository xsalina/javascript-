/*
 * @Date: 2020-08-13 22:05:39
 * @Autor: 肖月萍
 * @Description: 组合继承（常用）
 * @LastEditors: 肖月萍
 * @LastEditTime: 2020-08-13 22:12:00
 */


 /*
 
 组合继承：通过调用父类构造，继承父类的属性并保留传参的优点，
 然后通过将父类实例作为子类原型，实现函数复用


 优点：继承前两者的优点，能通过instanceOf和isPrototypeOf的检测
 缺点：两次调用父构造器函数，浪费内存。
 
 */




function Person(name){
    this.name = name 
    this.sum = function(){
        alert(this.name)
    }
}
Person.prototype.age = 10


//组合原型链和构造函数继承

function SubType(name){
    Person.call(this,name)//借用构造函数模式
}
SubType.prototype = new Person();//原型连继承

const sub = new SubType('xyp');
console.log(sub.age)
console.log(sub.name)
