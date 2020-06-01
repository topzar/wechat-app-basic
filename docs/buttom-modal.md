## 微信小程序自定义底部弹出层组件
简单封装底部弹出层组件，后期会完善更多功能
[![cover](/docs/buttom-modal.png)](/docs/buttom-modal.png)
#### 组件
 bottom-modal.wxml
 ```
 <view class="modal" hidden="{{!modalShow}}">
  <view class="panel">
      <view class="modal-title">
        <text class="title">{{title}}</text>
        <text class="close" bind:tap="onClose">X</text>
      </view>
      <view class="modal-body">
        <slot name="modal-content"></slot>
      </view>
  </view>
</view>
 ```
 bottom-modal.wxss
 ```
 .modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  text-align: center;
  background: rgba(0, 0, 0, 0.6);
}

.panel {
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0rpx;
  left: 0;
  width: 100%;
  min-height: 300rpx;
  box-sizing: border-box;
  background-color: #f8f8f8;
  border-top-left-radius: 15rpx;
  border-top-right-radius: 15rpx;
}

.modal-title {
  background: #f3f3f3;
  display: flex;
  flex-direction: row;
  text-align: left;
  border-top-left-radius: 15rpx;
  border-top-right-radius: 15rpx;
}

.modal .title {
  flex: 1;
  padding: 20rpx;
  color: #5a5a5a;
  font-size: 30rpx;
}

.modal .close {
  width: 50rpx;
  height: 50rpx;
  padding: 20rpx;
}

.modal-body {
  padding: 50rpx 20rpx;
  color: #5a5a5a;
}
 ```
 bottom-modal.js
 ```
 // components/bottom-modal/bottom-modal.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    modalShow: Boolean,
    title: {
      type: String,
      value: '标题'
    }
  },

  options: {
    multipleSlots: true,
  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {
    onClose() {
      this.setData({
        modalShow: false,
      })
    }
  }
})
 ```
bottom-modal.json
```
{
  "component": true,
  "usingComponents": {}
}
```
#### 引用
index.wxml
```
<button bindtap='popup' type="default" size="mini">底部弹框按钮</button>
<bottom-modal modalShow="{{modalShow}}" title="弹框标题">
  <view slot="modal-content">
      <view class='text'>弹框内容</view>  
  </view>
</bottom-modal>
```
index.json
```
{
  "navigationBarTitleText":"底部弹框组件测试",
  "usingComponents": {
    "bottom-modal":"/components/bottom-modal/bottom-modal"
  }
} 
```
index.js
```
Page({
  data: {
    modalShow: false,
  },

  popup(){
    this.setData({modalShow: true})
  }
})

```