/*
 * @Date: 2020-08-13 22:12:16
 * @Autor: 肖月萍
 * @Description: 寄生组合式内存（常用）
 * @LastEditors: 肖月萍
 * @LastEditTime: 2020-08-13 22:14:56
 */
/**
 * 
 * 寄生组合继承：通过寄生方式，砍掉父类的实例属性，这样，
 * 在调用两次父类的构造的时候，就不会初始化两次实例方法/属性，
 * 避免的组合继承的缺点
 * 
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
// content 就是F实例的另一种写法
const con = content(Person.prototype);
// con 实例（F实例）的原型继承了父类函数的原型；
// 上述更像是原型链继承，只不过只继承了原型属性
// 组合
function Sub() {
    Person.call(this); // 继承了父类构造函数的属性
} // 解决了组合式继承两次调用构造函数的缺点
// 重点
Sub.prototype = con; // 继承了con实例
con.constructor = Sub; // 一定要修复实例
const sub1 = new Sub();
// Sub的实例就继承了构造函数的属性，父类的实例，con函数的属性
console.log(sub1.age); // 10