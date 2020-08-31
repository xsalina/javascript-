/*
 * @Date: 2020-08-18 13:08:50
 * @Autor: 肖月萍
 * @Description: Do not edit
 * @LastEditors: 肖月萍
 * @LastEditTime: 2020-08-18 13:16:45
 */


interface Girl{
    name:string;
    age:number;
    bust:number;
    waistline?:number;//可选值
    [propname:string]:any;//可以任意属性为字符串，属性值为any;
    say():string;//say函数，返回值为string，必须有返回值
}
//Teacher 不仅要符合Girl的接口规范也要 work这个属性或者方法
interface Teacher extends Girl{
    work:string
}

//类的继承 Gril => implements 
class XiaoJieJie implements Girl{
    name = '留影'
    age= 19
    bust = 98
    sex = '女'
    say(){
        return 'kkk'
    }
}

const girl = {
    name:'小可爱',
    age:18,
    bust:94,
    waistline:21,
    sex:'女',
    say(){
        return '欢迎光临，红浪漫！！'
    }
}

//  const screenResume = (name:string,age:number,bust:number) => {
//      age < 24 && bust >= 90 && console.log(name + '进入面试了')
//      age >= 24 || bust < 90 && console.log(name + '你被淘汰了')
//  }

//  const getResume = (name:string,age:number,bust:number) => {
//      console.log(`${name}年龄是${age},胸围${bust}`)
//  }


const screenResume = (girl:Girl) => {
   girl.age < 24 && girl.bust >= 90 && console.log(girl.name + '进入面试了')
   girl.age >= 24 || girl.bust < 90 && console.log(girl.name + '你被淘汰了')
}

const getResume = (girl:Girl) => {
   console.log(`${girl.name}年龄是${girl.age},胸围${girl.bust}`)
   girl.waistline && console.log(`${girl.name},腰围${girl.waistline}`)
}

screenResume(girl) 
getResume(girl) 
