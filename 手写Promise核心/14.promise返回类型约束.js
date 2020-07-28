class XYP{
    static PENDING = 'pending';
    static FULFILLED = 'fulfilled';
    static REJECTED = 'rejected';
    constructor(executor){
        this.status = XYP.PENDING
        this.value = null;
        this.callbacks=[];
        try {//捕获异常
            executor(this.resolve.bind(this),this.reject.bind(this));
        } catch (error) {
            this.reject(error)
        }
       
    }
    resolve(value){
        if(this.status == XYP.PENDING){//静态属性要用class类名去获取
            this.status = XYP.FULFILLED
            this.value = value
            setTimeout(() => {
                this.callbacks.map(callback => {
                    callback.onFulfilled(value)
                })
            });
            
        }
       
    }
    reject(reason){
        if(this.status == XYP.PENDING){
            this.status = XYP.REJECTED
            this.value = reason
            setTimeout(() => {
                this.callbacks.map(callback => {
                    callback.onRejected(reason)
                })
            });
            
        }
        
    }
    then(onFulfilled,onRejected){//如果没有传入函数就给他赋值
        if(typeof onFulfilled !== 'function'){
            onFulfilled =()=> this.value
        }
        if(typeof onRejected !== 'function'){
            onRejected =()=> this.value
        }
        const promise = new XYP((resolve,reject)=>{
            if(this.status == XYP.PENDING){//如果状态是准备状态
                this.callbacks.push({
                    onFulfilled:value =>{
                        this.parse(promise,onFulfilled(value),reject,resolve)
                        
                    },
                    onRejected:reason =>{
                        this.parse(promise,onRejected(reason),reject,resolve)
                       
                    }
                })
                
               
            }
            if(this.status == XYP.FULFILLED){//如果状态是成功的才去执行成功的函数
                setTimeout(() => {//加入任务队列里面
                    this.parse(promise,onFulfilled(this.value),reject,resolve)
                    
                });
                
               
            }
            if(this.status == XYP.REJECTED){//如果状态是失败的采取执行失败的函数
                setTimeout(() => {//加入任务队列里面
                    this.parse(promise,onRejected(this.value),reject,resolve)
                    
                });
                
            }
        })
        return promise
    }
    parse(promise,result,reject,resolve){
        if(promise == result){
            throw new TypeError('Chaining cycle detected')
        }
        try {
            if(result instanceof XYP){
                result.then(resolve,reject)
              
            }else{
                resolve(result)
            }
            
        } catch (error) {
            reject(error)
        }
    }
}
let p =new XYP((resolve,reject)=>{
    // console.log(a)
    //这两个函数只能执行一个 要么成功要么失败，所在在执行函数的时候去判断状态为准备阶段才可以修改状态if(this.status == XYP.PENDING)
    resolve('成功了');
    // reject('失败了')
})
    let promise = p.then(value => {
        return promise
    })