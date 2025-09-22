<template> 
    <div>
        <h2>关于</h2>
    </div>
</template>

<script setup lang="ts" name="About">
    import { onMounted, onUnmounted } from 'vue';
    onMounted(() => {
        console.log('About组件挂载了');
    });
    onUnmounted(() => {
        console.log('About组件卸载了');
    });
</script>

<style scoped>
</style>