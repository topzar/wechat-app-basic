//app.js
App({
  onLaunch: function () {

    //UpdateManager对象，用来管理更新，可通过 wx.getUpdateManager接口获取实例
    const updateManager = wx.getUpdateManager()

    updateManager.onCheckForUpdate(function (res) {
      // 请求完新版本信息的回调,返回true或false
      //console.log(res.hasUpdate)
    })

    //监听小程序有版本更新事件
    updateManager.onUpdateReady(function () {
      wx.showModal({
        title: '更新提示',
        content: '新版本已经准备好，是否重启应用？',
        success: function (res) {
          if (res.confirm) {
            // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
            updateManager.applyUpdate()
          }
        }
      })
    })

    updateManager.onUpdateFailed(function () {
      // 新版本下载失败
    })
    
  },
  globalData: {
    userInfo: null
  }
})