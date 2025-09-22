<template> 
    <div>
        <h2>首页</h2>
    </div>
</template>

<script setup lang="ts" name="Home">
    import { useRouter } from 'vue-router';
    const router = useRouter();
    setTimeout(() => {
        router.push('/news');
    }, 3000);
</script>

<style scoped>
</style>