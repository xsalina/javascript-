/*
 * @Date: 2020-08-10 21:36:14
 * @Autor: 肖月萍
 * @Description: 原型链继承
 * @LastEditors: 肖月萍
 * @LastEditTime: 2020-08-10 22:47:19
 */


// * 原型链继承，将父类的实例作为子类的原型，他的特点是实例是子类的实例也是父类的实例，
// * 父类新增的原型方法/属性，子类都能够访问，并且原型链继承简单易于实现，
// * 缺点是来自原型对象的所有属性被所有实例共享，
// * 无法实现多继承，无法向父类构造函数传参。

 function SuperType(){
     this.clolors = ['red','green','black']
 }
 SuperType.prototype = new SuperType();
 SuperType.prototype.Fun = function(){console.log(33333)}
 let instance = new SuperType()
 instance.clolors.push('yellow ')
 console.log(7777,instance.clolors)//[ 'red', 'green', 'black', 'yellow ' ]

 /**
  * 优点：能通过instanceOf和isPrototype的检测
  * 注意：给原型添加方法的语句一定要放在原型替换SuperType.prototype = new SuperType();之后
  * 
  * 
  * 缺点：1.SuperType中的属性也变成了SuperType的prototype的中的公路属性，他可以被替换。
  *      2.创建子类型的时候，不能像父类的构造函数中传递参数
  */
  
 function Father(){
    this.colors = ['red','black'];
}
Father.prototype.getColors = function(){console.log('父类',this.colors)}
Father.prototype = new Father()

let a = new Father();
a.colors.push('yellow')
a.getColors()
