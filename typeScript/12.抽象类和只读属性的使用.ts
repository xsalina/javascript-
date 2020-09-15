/*
 * @Date: 2020-09-15 12:24:35
 * @Autor: 肖月萍
 * @Description: 只读属性
 * @LastEditors: 肖月萍
 * @LastEditTime: 2020-09-15 12:37:27
 */
class Type{
    public readonly name:string
    constructor(_name:string){
        this.name = _name
    }
}
const children = new Type('kaka');
console.log(children.name)






abstract class Girl{
    abstract skill()
}

class Waiter extends Girl{
    skill(){
        console.log('你好，欢迎光临')
    }
}

class Technician extends Girl{
    skill(){
        console.log('你好，我会按摩')
    }
}



class SeniorTechnician extends Girl{
    skill(){
        console.log('你好，我会全身SPA')
    }
}