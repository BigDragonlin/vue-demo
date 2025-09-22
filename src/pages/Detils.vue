<template>
    <li>编号{{ route.query.id }}</li>
    <li>标题{{ route.query.title }}</li>
    <li>内容{{ route.query.content }}</li>
</template>

<script setup lang="ts" name="Detils">
    import { useRoute } from 'vue-router';
    const route = useRoute();
</script>

<style scoped>
</style>