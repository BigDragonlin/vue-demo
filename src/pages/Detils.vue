<template>
    <li>编号{{ id }}</li>
    <li>标题{{ title }}</li>
    <li>内容{{ content }}</li>
</template>

<script setup lang="ts" name="Detils">
    defineProps(['id', 'title', 'content']);
</script>

<style scoped>
</style>