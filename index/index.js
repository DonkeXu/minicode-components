const app = getApp()
/**
 * 移植自博客：
 * https://www.cnblogs.com/tangchan/p/7604594.html
 */
Page({
  data: {
    show: true

  },
  onLoad: function () {
    var that = this
    setTimeout(function(){
      that.setData({show:false})
    }, 5000)
  },
})
