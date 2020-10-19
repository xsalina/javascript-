/*
 * @,@Date: ,: 2020-10-19 22:26:04
 * @,@Autor: ,: 肖月萍
 * @,@Description: ,: Do not edit
 * @,@LastEditors: ,: 肖月萍
 * @,@LastEditTime: ,: 2020-10-19 22:42:33
 */
//定义一个类，为泛型，girls为一个数组，这个数组的值的类型是实例化的时候定义的，
class SelectGirl<T>{
    constructor(private girls:T[]){

    }
    // 这个方法，是传入的是一个index下标，返回的是一个字符串
    getGirls(index:number):T{
        return this.girls[index]
    }

}
// 这里就是定义了T为字符串，所以girls为一个数组，他的值是字符串

const a = new SelectGirl<string>(['刘欢','小企鹅','大佬'])
console.log(a.getGirls(2))


// 这里就是定义了T为字符串，所以girls为一个数组，他的值是字符串

const b = new SelectGirl<number>([4,5,6])
console.log(b.getGirls(2))









// 继承
//定义一个类，为泛型，girls为一个数组，这个数组的值的类型只能是字符串或者数字
class SelectGirl111<T extends number|string>{
    constructor(private girls:T[]){

    }
    // 这个方法，是传入的是一个index下标，返回的是一个字符串
    getGirls(index:number):T{
        return this.girls[index]
    }

}

const aa = new SelectGirl111<string>(['jj','kk','ll'])
console.log(aa.getGirls(2))


// 这里就是定义了T为字符串，所以girls为一个数组，他的值是字符串

const bb = new SelectGirl111<number>([7,8,9])
console.log(bb.getGirls(2))






// 继承
interface obj{
    name:string,

}
//实例的传进来的值必须有name这个属性
class BB<T extends obj>{
    constructor(private girls:T[]){}
    //返回值是字符串
    getGirls(index:number):string{
        return this.girls[index].name
    }
}
const bbSon = new BB([{
    name:'wukal',
    age:18
}])
console.log(bbSon.getGirls(0))