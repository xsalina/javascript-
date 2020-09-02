/*
 * @Date: 2020-09-02 10:35:36
 * @Autor: 肖月萍
 * @Description: 类的Getter、Setter和static
 * @LastEditors: 肖月萍
 * @LastEditTime: 2020-09-02 10:42:27
 */


 class D{
     constructor(private _age:number){}
     get age(){
         return this._age
     }
     set age(age:number){
         this._age = age
     }
 }

 const a = new D(28)
console.log(a.age)
a.age = 90
console.log(a.age)





class StaticFun{
    static getTimeDay(){
        return '我是静态属性，只能通过访问类才执行'
        
    }
}
console.log(StaticFun.getTimeDay())