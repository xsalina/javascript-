/*
 * @Date: 2020-08-11 21:28:26
 * @Autor: 肖月萍
 * @Description: 实例继承
 * @LastEditors: 肖月萍
 * @LastEditTime: 2020-08-12 13:28:31
 */
/**
 * 实例继承，为父类实例添加新特性，作为子类实例返回，
 * 实例继承的特点是不限制调用方法，
 * 不管是new 子类（）还是子类（）返回的对象具有相同的效果，
 * 缺点是实例是父类的实例，不是子类的实例，不支持多继承
 * 
 * 
 * 
 * 
 * 
 * 缺点：1、所有实例都会继承原型上的属性；
   2、无法实现复用（新实例属性都是后面添加的）。
 * 
 * 
 */

 function Person(){
     this.age = 18;
 }
// 先封装一个函数容器，用来输出对象和承载继承的原型
function content(obj) {
    function F() {}
    F.prototype = obj; // 继承了传入的参数
    return new F(); // 反回函数对象
}
const sup = new Person(); // 创建父类函数的实例
const sup1 = content(sup);
console.log(sup1.age); // 继承了父类函数的属性
