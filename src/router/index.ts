// 引入vue-router
import { createRouter, createWebHistory} from 'vue-router';
import Home from '@/components/Home.vue';
import News from '@/components/News.vue';
import About from '@/components/About.vue';

// 创建路由实例
const router = createRouter({
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