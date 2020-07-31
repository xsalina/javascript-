/*
 * @Date: 2020-07-31 22:59:50
 * @Autor: 肖月萍
 * @Description: 节流
 * @LastEditors: 肖月萍
 * @LastEditTime: 2020-07-31 23:42:15
 */

 /**
  * 
  * 节流：连续发生的事件只在n秒内只执行一次
  * 
  * 
  * 
  * 
  * 
  * 
  */

 const container = document.querySelector('.box')
 console.log(5,container)
 let num = 0;

    //定时器 固定的事件去发请求
  function throttle(fun,await){
    let timer;
    return function(){
        if(!timer){//没有的时候 去创建这个定时器  ，有的时候会在规定时间内执行完，然后清除掉这个定时器 
            timer = setTimeout(() => {
                timer = null
                fun.apply(this)
            }, await);
        }
    }
    
  }


    //时间戳 固定的事件去发请求
    function throttle1(fun,await){
        let preTime = 0;
        return function(){
            const nowTime = Date.now()
            if(nowTime - preTime >= await ){//没有的时候 去创建这个定时器  ，有的时候会在规定时间内执行完，然后清除掉这个定时器 
                    fun.apply(this)
                    preTime = nowTime
            }
        }
        
      }

  function calcNumber(){
    num ++
    container.innerHTML = num;
    console.log(num)
}

const debounceCalcNumber = this.throttle1(calcNumber,1000)
container.onmousemove = debounceCalcNumber