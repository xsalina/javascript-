/*
 * @Date: 2020-08-10 21:49:04
 * @Autor: 肖月萍
 * @Description: 构造函数继承
 * @LastEditors: 肖月萍
 * @LastEditTime: 2020-08-10 22:54:37
 */


 /**
  * 
  * @param {*} name
  * 
  * 构造继承，使用父类的构造函数来增强子类实例，即复制父类的实例属性给子类，
  * 
  * 优点：构造继承可以向父类传递参数，可以实现多继承，通过call多个父类对象。
  * 缺点：
  * 1.构造继承只能继承父类的实例属性和方法，不能继承原型属性和方法，
  * 2.无法实现函数服用，
  * 3.每个子类都有父类实例函数的副本，影响性能
  * 4.这里通过call的方法，将this绑定在Father构造函数上运行，但是会导致没有自己的原型对象，无法共享原型的方法和属性。

 
  */
function Father(name){
    this.name = name;
}
Father.prototype.getName = function(){console.log(this.name)}
function Son(name){
    //  通过call去改变this
    Father.call(this,name)
}
Son.prototype.getName = function(){
    console.log('子类',this.name)
}
let a = new Son('wukala');
a.getName()
// a.getName()
