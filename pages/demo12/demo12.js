Page({
  data: {
    gender: "",
    list:[
      {
        id:0,
        name:"香蕉",
        value:"b"
      },{
        id:1,
        name:"苹果",
        value:"a"
      }
    ],
    checkedList:[]
  },
  handleChange(e){
    // 1 获取单选框中的值
    let gender=e.detail.value;
    // 2 把值 赋值给 data中的数据
    this.setData({
      // gender:gender
      gender
    })
  },
  handleItemChange(e){
    const checkedList=e.detail.value;
    console.log(e.detail);
    this.setData({
      checkedList
    }) 
  }
})