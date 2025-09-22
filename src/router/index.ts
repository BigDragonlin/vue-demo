// 引入vue-router
import { createRouter, createWebHistory, createWebHashHistory} from 'vue-router';
import Home from '@/pages/Home.vue';
import News from '@/pages/News.vue';
import About from '@/pages/About.vue';

// 创建路由实例
const router = createRouter({
    // 哈希模式:带#号,不利于seo,不用后端额外配置
    // history: createWebHashHistory(),//哈希模式
    // 历史模式:不带#号,利于seo,需要后端额外配置
    history: createWebHistory(),//历史模式
    routes: [
        {
            path: '/home',
            component: Home
        },
        {
            path: '/news',
            component: News
        },
        {
            path: '/about',
            component: About
        },
    ]
})

export default router;