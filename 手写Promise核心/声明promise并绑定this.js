class XYP{
    static PENDING = 'pending';
    static FULFILLED = 'fulfilled';
    static REJECTED = 'rejected';
    constructor(executor){
        this.status = XYP.PENDING
        this.value = null;
        executor(this.resolve.bind(this),this.reject.bind(this));
    }
    resolve(value){
            this.status = XYP.FULFILLED
            this.value = value
            console.log(value)
        
       
    }
    reject(reason){
            this.status = XYP.REJECTED
            this.value = reason
            console.log(reason)
        
        
    }
}
let p =new XYP((resolve,reject)=>{
    //这两个函数只能执行一个 要么成功要么失败，
    resolve('成功了');
    reject('失败了')
});