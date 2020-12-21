Page({
  data:{
    name:'wangcai',
    basketball:[
      {name:'kebo',age:18,},
      {name:'james',age:20,},
      {name:'taidm',age:22,},
      {name:'alika',age:17,},
      {name:'wangs',age:25,},
    ],
    number:0
  },
  addition(){
    // this.data.number++
    // console.log(this.data.number)  这种写法可以改变数字的大小，但是由于不是响应式的，所以无法显示出来。
    this.setData({
       number:this.data.number+1
    })
  },
  subtraction(){
    this.setData({
       number:this.data.number-1
    })
  }
})