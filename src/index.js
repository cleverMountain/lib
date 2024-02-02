import UButton from "./components/Button.vue"
import { render, h } from 'vue'
import Message from "./components/Message.vue"

const components = [
  {
    name: 'u-button',
    component: UButton
  }
]
const registerComponents = {
  install(app) {
    components.forEach(item => {
      app.component(item.name, item.component)
    })
  }
}
const message = {
  handler() {

  },
  success(content) {
    const handleDestroy = () => {
      // 从 body 上移除组件
      render(null, document.body)
    }

    // 使用 h 函数创建 vnode
    const vnode = h(Message, {
      content,
      duration: 1500,
      destroy: handleDestroy
    })
    // 使用 render 函数将 vnode 渲染为真实DOM并挂载到 body 上
    render(vnode, document.body)
  }
}

export default registerComponents

export {
  UButton,
  message
}