<template>
    <div>
        <h2>新闻1</h2>
        <h2>新闻2</h2>
        <h2>新闻3</h2>
    </div>
</template>

<script setup lang="ts" name="News">
    import { onMounted, onUnmounted } from 'vue';
    onMounted(() => {
        console.log('News组件挂载了');
    });
    onUnmounted(() => {
        console.log('News组件卸载了');
    });
</script>

<style scoped>
    div { border: 5px solid #000;
    }

    h2 {
        margin: 10px 0;
        text-align: center;
    }
</style>