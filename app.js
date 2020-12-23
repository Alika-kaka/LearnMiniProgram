//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  
  onShow:function(option){
    // 判断小程序的应用场景
    // onshow 执行多次，用户每进入一次小程序都要进行执行，而onlaunch是小程序初始化时执行。
    console.log(option)
    switch(option.scene){
      case 1001 :
        break;
        case 1011:
          console.log('我是由扫描二维码进入的')
    };
    // 获取用户信息 方法一：方法二见home.wxml
    wx.getUserInfo({
      success(res){
        console.log(res)
      }
    })
  },
  globalData: {    //设置全局的数据和变量
    name:'wangcai',
    age:18,
    isshow:true
  }
})