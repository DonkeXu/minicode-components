Component({
  /**
   * 组件的属性列表
   */
  properties: {
    center: {
      type: [Boolean, String],
      value: false
    },
    bgColor: {
      type: String,
      value: '#68b2ce'
    },
    show: {
      type: [Boolean, String],
      value: true
    },
    mode: {  // 1、2、3、4对应四种加载样式
      type: String,
      value: "1"
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    show: true,
    mode: "1"
  },
  ready() {
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
