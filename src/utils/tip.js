import wepy from 'wepy'

// 提示与加载工具类
export default class Tips {
  constructor() {
    this.ifLoading = false // 是否正在加载
  }
  // 弹出load
  static loading(title = '加载中...') {
    if (this.ifLoading) {
      return
    }
    this.ifLoading = true
    wepy.showLoading({
      title,
      mask: true
    })
  }
  // 关闭load
  static loadend() {
    if (this.ifLoading) {
      this.ifLoading = false
      wepy.hideLoading()
    }
  }
  // 网络错误提示语
  static errorNetwork() {
    wepy.showToast({
      title: '网络错误',
      icon: 'none'
    })
  }

  // 弹出模态窗口
  // title content 是否显示取消按钮
  // 取消和确定的text、color
  static confirm({
                   title, content, showCancel,
                   cancelText, cancelColor,
                   confirmText, confirmColor
  }) {
    wepy.showModal({
      title,
      content,
      showCancel,
      cancelText,
      cancelColor,
      confirmText,
      confirmColor
    })
  }
}
