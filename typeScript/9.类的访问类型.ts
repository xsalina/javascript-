/*
 * @Date: 2020-08-31 22:21:16
 * @Autor: 肖月萍
 * @Description: 类的访问类型
 * @LastEditors: 肖月萍
 * @LastEditTime: 2020-08-31 22:26:48
 */

//类的内部和外部 private私有的，只允许在内部使用，不包含继承，protected受保护的，可以在继承类的类部使用
 class Person{
    //  默认的是public
    protected age:number = 20
    public name:string
    public sayHello(){
         console.log(this.name)
     }
 }