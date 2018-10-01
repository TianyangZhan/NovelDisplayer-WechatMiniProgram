// epilogue.js
Page({
  data: {
    img:"../../images/ending.jpg"
  },
//事件处理函数
bindViewTap: function () {
  wx.navigateBack({
    
  })
},
onShareAppMessage: function () {
  return {
    title: 'Batman: The Last Laugh (Script)',
    desc: 'A Batman Story.',
    path: '/page/cover/cover?id=123'
  }
}
})