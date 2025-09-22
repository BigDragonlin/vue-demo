// 引入vue-router
import { createRouter, createWebHistory, createWebHashHistory} from 'vue-router';
import Home from '@/pages/Home.vue';
import News from '@/pages/News.vue';
import About from '@/pages/About.vue';
import Detils from '@/pages/Detils.vue';

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
            component: News,
            children: [
                {
                    name: 'detail',
                    path: 'detail/:id/:title/:content?',
                    component: Detils,
                    // 方法一，将路由收到的所有prams参数传给props
                    // props: true

                    // 方法二，将路由收到的所有query参数传给props
                    // props: (route) => route.query
                    props: (route) => route.params

                    // //方法三，固定参数
                    // props: {
                    //     id: '1',
                    //     title: '新闻1',
                    //     content: '新闻1内容'
                    // }
                }
            ]
        },
        {
            path: '/about',
            component: About
        },
    ]
})

export default router;// 