/*
 * @Date: 2020-08-18 12:46:36
 * @Autor: 肖月萍
 * @Description: typescript初识接口interface
 * @LastEditors: 肖月萍
 * @LastEditTime: 2020-08-18 13:09:31
 */


//  interface Girl{
//      name:string;
//      age:number;
//      bust:number;
//      waistline?:number;//可选值
//  }

//  const girl = {
//      name:'小可爱',
//      age:18,
//      bust:94,
//      waistline:21
//  }

//  const screenResume = (name:string,age:number,bust:number) => {
//      age < 24 && bust >= 90 && console.log(name + '进入面试了')
//      age >= 24 || bust < 90 && console.log(name + '你被淘汰了')
//  }

//  const getResume = (name:string,age:number,bust:number) => {
//      console.log(`${name}年龄是${age},胸围${bust}`)
//  }


// const screenResume = (girl:Girl) => {
//     girl.age < 24 && girl.bust >= 90 && console.log(girl.name + '进入面试了')
//     girl.age >= 24 || girl.bust < 90 && console.log(girl.name + '你被淘汰了')
// }

// const getResume = (girl:Girl) => {
//     console.log(`${girl.name}年龄是${girl.age},胸围${girl.bust}`)
//     girl.waistline && console.log(`${girl.name},腰围${girl.waistline}`)
// }

//  screenResume(girl) 
//  getResume(girl) 