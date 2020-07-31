/*
 * @Date: 2020-07-31 19:05:15
 * @Autor: 肖月萍
 * @Description: 防抖
 * @LastEditors: 肖月萍
 * @LastEditTime: 2020-07-31 22:57:49
 */

 /********
  * 防抖：指触发事后在n秒内函数只执行一次，若在这个n秒内再次触发则重新计算
  * 
  * 
  * 
  * 
  * 
  */


 const container = document.querySelector('.box')
 console.log(5,container)
let num = 0;


//用户输完之后过几秒执行
function debounce(fun,await){
     let timer;
     return function(){
         if(timer)clearTimeout(timer)
         timer = setTimeout(() => {
             fun.apply(this)//执行函数
         }, await);
     }
}


//一开始就执行，在执行的时候是过了两秒钟
function debounce1(fun,await){
    let timer;
    return function(){
        if(timer)clearTimeout(timer)
        const callNow = !timer;
        timer = setTimeout(() => {//过两秒之后为空，这是为了用户两秒钟内只执行一次
            timer = null//执行函数
        }, await);

        if(callNow) fun.apply(this)//如果定时器没有的话就执行
    }
}


 function calcNumber(){
     num ++
     container.innerHTML = num;
     console.log(num)
 }

 const debounceCalcNumber = this.debounce1(calcNumber,1000)
 container.onmousemove = debounceCalcNumber