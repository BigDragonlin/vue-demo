<template>
    <div class="newsTitle">
        <!-- 遍历news数据 -->
        <ul>
            <li v-for="item in news" :key="item.id">
                <!-- 方式一 -->
                <!-- <RouterLink :to="`/news/detail/${item.id}/${item.title}/${item.content}`">{{ item.title }} -->
                
                <!-- 方式而 -->
                <RouterLink :to="{
                    name : 'detail',
                    params: {
                        id: item.id,
                        title: item.title,
                        content: item.content
                    }
                }">{{ item.title }}
                </RouterLink>
            </li>
        </ul>
    </div>
    <div class="newsContent">
        <RouterView></RouterView>
    </div>
</template>

<script setup lang="ts" name="News">
    import { reactive } from 'vue';
    const news = reactive([
        { id: 1, title: '新闻1', content: '新闻1内容'},
        { id: 2, title: '新闻2', content: '新闻2内容'},
        { id: 3, title: '新闻3'},
    ]);
</script>

<style scoped>
    .newsTitle {
        border: 5px solid #000;
        text-align: left;
    }

    h2 {
        margin: 10px 0;
        text-align: left;
    }
</style>