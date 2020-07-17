//下载资源66好用源码网：www.66hyym.com
// pages/demo17/demo18.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    tabs: [
      {
        id: 0,
        name: "首页",
        isActive: true
      },
      {
        id: 1,
        name: "原创",
        isActive: false
      }
      ,
      {
        id: 2,
        name: "分类",
        isActive: false
      }
      ,
      {
        id: 3,
        name: "关于",
        isActive: false
      }
    ]

  },

  // 自定义事件 用来接收子组件传递的数据的
  handleItemChange(e) {
    // 接收传递过来的参数
    console.log(e);
    const { index } = e.detail;
    let { tabs } = this.data;
    console.log(tabs);
    tabs.forEach((i, v) => v === index ? i.isActive = true : i.isActive = false);
    this.setData({
      tabs
    })
  }
})