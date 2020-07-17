Page({
  data: {
    num: 0
  },
  //输入框
  handleInput(e) {
this.setData({
  num: e.detail.value
})
  },
  handletap(e){
    const operation = e.currentTarget.dataset.operation;
    this.setData({
        num: this.data.num + operation
      })
      console.log(e)
  }
})