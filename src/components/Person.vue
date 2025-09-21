<template>
    <div>???</div>
</template>


<script lang="ts" setup name = "Person">
    import {onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue';
    //vue3生命周期
    //create
    console.log('create');
    // 挂载前
    onBeforeMount(() => {
        console.log('beforeMount');
    });
    // 挂载后
    onMounted(() => {
        console.log('mounted');
    });
    // 更新前
    onBeforeUpdate(() => {
        console.log('beforeUpdate');
    });
    // 更新后
    onUpdated(() => {
        console.log('updated');
    });
    // 卸载前
    onBeforeUnmount(() => {
        console.log('beforeUnmount');
    });
    // 卸载后
    onUnmounted(() => {
        console.log('unmounted');
    });
</script>

<style scoped>
    .person {
        background-color: #f0f0f0;
        padding: 20px;
        border-radius: 10px;
    }

    button {
        margin-right: 10px;
    }

    ul {
        list-style: none;
        padding: 20px;
        background-color: #f0f0f0;
    }
</style>