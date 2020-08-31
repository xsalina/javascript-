/*
 * @Date: 2020-08-31 20:12:53
 * @Autor: 肖月萍
 * @Description: 类的概念和使用
 * @LastEditors: 肖月萍
 * @LastEditTime: 2020-08-31 20:17:54
 */
class Lady{
    content = 'hi,lili'
    sayHello(){
        return this.content
    }
}

class Xiao extends Lady{
    // sayHello(){
    //     return super.sayHello()//调用父级的方法
    // }
    
}

const newWoman = new Xiao();
console.log(newWoman.sayHello())