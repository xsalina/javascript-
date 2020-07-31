/*
 * @Date: 2020-07-30 23:13:05
 * @Autor: 肖月萍
 * @Description: Do not edit
 * @LastEditors: 肖月萍
 * @LastEditTime: 2020-07-31 13:11:41
 */
window.addEventListener("resize", function(){
    dosomeThing()
  });
window.onload = dosomeThing//页面加载
        // 第二排的图片开始用定位 
        // position:absolut
        // left:最小高度的索引值 * 图片的宽度
        // top:图片最小高度的值


        // 思路
        // 1.假设有四列  
        //2.用一个数组装第一排的四个图片的高度 
        //3.除第一排外，所有图片每放一张应该放在上一排最小高度图片的下面 
        //4 除第一排外，所有图片用定位  top：数组（第一排四张图片的高度）最小的值   left：数组（第一排四张图片的高度）最小值的索引 * 图片的宽度 
        //5再把数组中最小的值 加等于当前放好图片的高度
        //6依次类推  

    
        function dosomeThing(){
            const containers = document.getElementsByClassName('container');//有多少张图片
            const containerWidth = containers[0].offsetWidth;//图片宽度
            const totallyWidth =document.body.clientWidth;//总屏幕的宽度

            const cols = parseInt(totallyWidth/containerWidth)//    有多少列

            const imageHeigthArr = [];//这个数组的长度应该是列数

            const len = containers.length;
            console.log(111,containers)
            for(let i = 0;i < len;i ++){
                if(i < cols){//第一排的图片
                    //第一排图片的高度
                    imageHeigthArr.push(containers[i].offsetHeight)
                }else{
                    const minHeight = Math.min(...imageHeigthArr)//找数组中最小的高度

                    const minHeightIndex = imageHeigthArr.findIndex(item => item == minHeight)//找数组中最小高度的索引值


                    
                    containers[i].style=`position:absolute;left:${minHeightIndex * containerWidth}px;top:${minHeight}px`;

                    //最后给这个最小的高度加上自己的高度再放倒数组里面
                    
                    imageHeigthArr[minHeightIndex] += containers[i].offsetHeight

                }
            }





}