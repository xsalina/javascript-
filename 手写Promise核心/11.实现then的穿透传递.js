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
        return new XYP((resolve,reject)=>{
            if(this.status == XYP.PENDING){//如果状态是准备状态
                this.callbacks.push({
                    onFulfilled:value =>{
                        try {
                            let result =  onFulfilled(value)
                            resolve(result)
                        } catch (error) {
                            reject(error)
                        }
                    },
                    onRejected:reason =>{
                        try {
                            let result =  onRejected(reason)
                            resolve(result)
                        } catch (error) {
                            reject(error)
                        }
                    }
                })
                
               
            }
            if(this.status == XYP.FULFILLED){//如果状态是成功的才去执行成功的函数
                setTimeout(() => {//加入任务队列里面
                    try {
                        let result = onFulfilled(this.value)
                        resolve(result)
                    } catch (error) {
                        reject(error)
                    }
                });
                
               
            }
            if(this.status == XYP.REJECTED){//如果状态是失败的采取执行失败的函数
                setTimeout(() => {//加入任务队列里面
                    try {
                        let result = onRejected(this.value)
                        resolve(result)
                    } catch (error) {
                        reject(error)
                    }
                });
                
            }
        })
    }
}
let p =new XYP((resolve,reject)=>{
    // console.log(a)
    //这两个函数只能执行一个 要么成功要么失败，所在在执行函数的时候去判断状态为准备阶段才可以修改状态if(this.status == XYP.PENDING)
    // resolve('成功了');
    reject('失败了')
})
.then()
.then(
    value =>{
        console.log(value)
        return 6456
    },
    reason =>{
        console.log(reason)
        return 3456
    }
).then(
    value =>{
        console.log(000000,value)
    },
    
)