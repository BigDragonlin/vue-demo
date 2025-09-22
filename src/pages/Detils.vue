<template>
    <li>编号{{ route.params.id }}</li>
    <li>标题{{ route.params.title }}</li>
    <li>内容{{ route.params.content }}</li>
</template>

<script setup lang="ts" name="Detils">
    import { useRoute } from 'vue-router';
    let route = useRoute();
    console.log(route);
</script>

<style scoped>
</style>