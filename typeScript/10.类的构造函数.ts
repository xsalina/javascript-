/*
 * @Date: 2020-08-31 22:34:31
 * @Autor: 肖月萍
 * @Description: 类的构造函数
 * @LastEditors: 肖月萍
 * @LastEditTime: 2020-08-31 22:39:11
 */
class T{
    constructor(public name:string){}
}
class Teachers extends T{
    constructor(public age:number){
        super('john')
    }
}
const newTe = new Teachers(19);
console.log(newTe.name)
console.log(newTe.age)