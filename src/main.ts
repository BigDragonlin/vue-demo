import { createApp } from 'vue'
// 引入pinia
import { createPinia } from 'pinia'
// 引入App组件
import App from './App.vue'
let app = createApp(App)
// 创建pinia实例
let pinia = createPinia()
// 使用pinia
app.use(pinia)
app.mount('#app')