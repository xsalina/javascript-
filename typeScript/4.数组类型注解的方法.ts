/*
 * @Date: 2020-08-14 12:43:29
 * @Autor: 肖月萍
 * @Description: 数组类型注解的方法
 * @LastEditors: 肖月萍
 * @LastEditTime: 2020-08-14 12:56:55
 */

//数字
 const arrNumber:number[] = [3,4,5];
//字符串
 const arrString:string[] = ['3','4','5'];
//数字和字符串
 const arrStringOrNumber:(string|number)[] = ['4','5',7]



 //数组装对象类型
 const arrObj:{name:string,age:number}[] = [
    {
        name:'xyp',
        age:18
    }
]


//type alias 类型别名
type Man = {name:string,age:number,sex:string};

const arrMan:Man[] = [
    {
        name:'xyp',
        sex:'女',
        age:18
    }
]



//类的形式
class Mans{
    name:string;
    age:number;
    sex:string
}


const arrMans:Mans[] = [
    {
        name:'xyp',
        sex:'女',
        age:18
    }
]