class XYP{
    static PENDING = 'pending';
    static FULFILLED = 'fulfilled';
    static REJECTED = 'rejected';
    constructor(executor){
        this.status = XYP.PENDING
        this.value = null;
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
            console.log(value)
        }
       
    }
    reject(reason){
        if(this.status == XYP.PENDING){
            this.status = XYP.REJECTED
            this.value = reason
            console.log(reason)
        }
        
    }
}
let p =new XYP((resolve,reject)=>{
    console.log(a)
    //这两个函数只能执行一个 要么成功要么失败，所在在执行函数的时候去判断状态为准备阶段才可以修改状态if(this.status == XYP.PENDING)
    resolve('成功了');
    reject('失败了')
});
console.log(p)