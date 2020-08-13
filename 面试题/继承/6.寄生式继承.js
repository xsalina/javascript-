/*
 * @Date: 2020-08-13 22:15:48
 * @Autor: 肖月萍
 * @Description: 寄生式继承
 * @LastEditors: 肖月萍
 * @LastEditTime: 2020-08-13 22:17:23
 */


 /**
  * 
  * 重点：就是给原型式继承外面套了个壳子。
　　　　优点：没有创建自定义类型，因为只是套了个壳子返回对象（这个），这个函数顺理成章就成了创建的新对象。
　　　　缺点：没用到原型，无法复用。
  * 
  * 
  * 
  * 
  */
function content(obj) {
    function F() {}
    F.prototype = obj; // 继承了传入的参数
    return new F(); // 反回函数对象
}
const sup = new Person();
// 以上是原型式继承，给原型式继承再套个壳子传递参数
function SubObject(obj) {
    let sub = content(obj);
    sub.name = 'hyy';
    return sub;
}
const sup2 = new SubObject(sup);
// 这个函数经过声明之后就成了可增添属性的对象
console.log(typeof SubObject); // function
console.log(typeof sup2); // object
console.log(sup2.name); // hyy, 继承了sub属性