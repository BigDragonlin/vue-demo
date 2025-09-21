// 引入vue
import { createApp } from 'vue'
// 引入路由
import router from './router'
// 引入App组件
import App from './App.vue'
// 创建应用实例
let app = createApp(App)
// 使用路由
app.use(router)
// 挂载应用
app.mount('#app')