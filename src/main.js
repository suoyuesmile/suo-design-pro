import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './store'
import Vconsole from 'vconsole'

// 引入通用scss文件初始化样式
import '@/assets/styles/index.scss'
// 适应屏幕宽度
import '@/utils/adapt.js'
// 引入全局组件
import './global.js'

if (process.env !== 'production') {
  // eslint-disable-next-line no-new
  new Vconsole()
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
