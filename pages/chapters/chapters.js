// chapters.js
  //获取应用实例
  var app = getApp()
Page({
  data: {
    btm: '../../icons/sc.png',
    CptList:[
      { id: 1, title: "Ⅰ", img: "../../images/cpt1.jpg", url:"../detail/detail"},
      { id: 2, title: "Ⅱ", img: "../../images/cpt2.jpg", url: "../detail3/detail3"},
      { id: 3, title: "Ⅲ", img: "../../images/cpt3.jpg", url: "../detail5/detail5" },
      { id: 4, title: "Ⅳ", img: "../../images/cpt4.jpg", url: "../detail7/detail7" }
    ]
  },
  onShareAppMessage: function () {
    return {
      title: 'Batman: The Last Laugh (Script)',
      desc: 'A Batman Story.',
      path: '/page/cover/cover?id=123'
    }
  }
})
