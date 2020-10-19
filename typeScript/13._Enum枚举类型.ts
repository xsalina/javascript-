/*
 * @,@Date: ,: 2020-10-19 20:40:04
 * @,@Autor: ,: 肖月萍
 * @,@Description: ,: Do not edit
 * @,@LastEditors: ,: 肖月萍
 * @,@LastEditTime: ,: 2020-10-19 20:58:29
 */
// 一般情况下会选择
// const Status ={
//     SPA:0,
//     COOKIE:1,
//     READ:2,
//     WATCHTV:3
// }
enum Status{
    SPA,
    COOKIE,
    READ,
    WATCHTV
}
function todo(status:any){
    switch(status){
        case Status.SPA:
            return 'go to spa'
        case Status.COOKIE:
            return 'go to cookie'
        case Status.READ:
            return 'go to read'
        case Status.WATCHTV:
            return 'go to watchTv'

    }
}

//索引值是从0开始的，要不想从0开始，那就从可以直接复制 例如 
enum Status1{
    SPA = 1,
    COOKIE,
    READ ,
    WATCHTV
}

console.log(Status1.COOKIE)

// //代表的索引值
console.log(Status.SPA) //0 
console.log(Status.COOKIE)//1
console.log(Status.READ)//2
console.log(Status.WATCHTV)//3


// //索引值代表的值，,
console.log(Status[0]) //SPA 
console.log(Status[1])//COOKIE
console.log(Status[2])//READ
console.log(Status[3])//WATCHTV

