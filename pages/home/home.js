// pages/home/home.js

//拿到app.js里面定义的全局数据
//app返回值里包含这些数据
const app = getApp()
var name = app.globalData.name
console.log(name+'------------')
const age = app.globalData.age


Page({
  handlegetuserinfo(event) {
    console.log('-----------')
    console.log(event)
  },
  "data":{        //放在data里面的数据可以被wxml引用
    name:name,
    age
  }
})