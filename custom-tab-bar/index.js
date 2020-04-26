// custom-tab-bar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    selected: 0,
    color: "#000000",
    selectedColor: "#000000",
    backgroundColor: "#000000",
    list: [
      {
        "pagePath": "/pages/index/index",
        "iconPath": "/images/tabBar/index.png",
        "selectedIconPath": "/images/tabBar/index_s.png",
        "text": "Home"
      },
      {
        "pagePath": "/pages/discover/index",
        "iconPath": "/images/tabBar/award.png",
        "selectedIconPath": "/images/tabBar/award_s.png",
        "text": "Discover"
      },
      {
        "pagePath": "/pages/me/index",
        "iconPath": "/images/tabBar/mine.png",
        "selectedIconPath": "/images/tabBar/mine_s.png",
        "text": "Me"
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    switchTab(e) {
      
      const data = e.currentTarget.dataset
      const url = data.path

      wx.switchTab({ url })
      this.setData({
        selected: data.index
      })
    }
  }
})
