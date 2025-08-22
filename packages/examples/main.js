// 公共导入
import App from './App'
import './style/global.scss'
import './uni.scss'


// #ifdef VUE3
// Vue3 专用导入
import { createSSRApp } from 'vue'
import { createPinia } from 'pinia'
import uviewPlus from 'uview-plus'

export function createApp() {
  const app = createSSRApp(App)
  const pinia = createPinia()
  app.use(pinia)
  app.use(uviewPlus)
  return {
    app
  }
}
// #endif