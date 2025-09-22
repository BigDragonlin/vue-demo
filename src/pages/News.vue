<template>
    <div class="newsTitle">
        <!-- 遍历news数据 -->
        <ul>
            <li v-for="item in news" :key="item.id">
                <RouterLink to="/news/detail">{{ item.title }}</RouterLink>
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
        { id: 1, title: '新闻1'},
        { id: 2, title: '新闻2'},
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