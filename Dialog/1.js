class Dialog {
  constructor($root, options = {}) {//options表示三个按钮的功能传递进去,是个空集合
    this.$root = $root
    this.options = options
    this.onCancel = options.onCancel || function () { }
    this.onOk = options.onOk || function () { }

    this.bind()//后面要绑定事件
  }

  bind() {
    let self = this
    this.$root.querySelector('.close').onclick = function () {
      self.hide()
      self.onCancel()
    }

    this.$root.querySelector('.btn-cancel').onclick = function () {
      self.hide()
      self.onCancel()
    }

    this.$root.querySelector('.btn-ok').onclick = function () {
      self.hide()
      self.onOk()
    }
  }

  hide() {
    this.$root.classList.remove('appear')
    
    setTimeout(()=>this.$root.classList.remove('show'),400)
    
  }

  show() {
    this.$root.classList.add('show')
    setTimeout(()=>this.$root.classList.add('appear'))//让css效果按顺序执行
  }
}

let dialog = new Dialog(document.querySelector('.dialog'), {
  onOk() {
    console.log('用户点了ok')
  },
  onCancel() {
    console.log('用户点了取消')
  }
})

document.querySelector('.opn-dialog').onclick = function () {
  dialog.show()
}