//cover.js
//获取应用实例
var app = getApp()
Page({
  data: {
    img1: '../../images/1.png',
    img2: '../../images/2.png',
    img3: '../../images/3.jpg',
    img4: '../../images/4.png',
    type: 'img1',
    btm: '../../icons/sc.png',
    boolean: false,
    isPlaying: true,
    title: 'BATMAN',
    subtitle: 'THE LAST LAUGH',
    author:'Justin Dombrowski & Chris Rose \t ',
    author2:'\"The Killing Joke\" Ending Edited By Zteey',
    credit1:'Based on the Character Published in',
    credit2:"DC Comics",
    src: "",
  },
  toggle: function (e) {
    var that = this;
    var type = that.data.type === 'img1' ? 'img2' : 'img1';
    that.setData({
      type: type
    });
  },
  EventHandle: function () {
    var bol = this.data.boolean;
    this.setData({
      boolean: !bol
    })
  },
  onReady: function (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('BGM')
    this.audioCtx.setSrc('http://fs.web.kugou.com/cbe5e7c892493156aa554f54af64e44c/59b50ae1/G053/M01/1A/0D/FZQEAFbrvhmAUUVyAM4HlB_apqg899.mp3')
    this.audioCtx.seek(280.25)
    this.audioCtx.play()
  },
  audioPlay: function () {
    if (this.data.isPlaying) { //正在播放
      this.audioCtx.pause() //停止播放歌曲
      this.setData({
        btm: '../../icons/so.png'
      });
    }else {//未播放，则开始播放
      this.audioCtx.play()
      this.setData({
        btm: '../../icons/sc.png'
      });
    }
    //更新播放状态
    this.setData({
      isPlaying: !this.data.isPlaying
    });
  },
  onShareAppMessage: function () {
    return {
      title: 'Batman: The Last Laugh (Script)',
      desc: 'A Batman Story.',
      path: '/page/cover/cover?id=123'
    }
  }
})
