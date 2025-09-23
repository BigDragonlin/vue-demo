<template>
    <div class="count">
        <h2>当前求和为{{ sum }}</h2>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment">点我+</button>
        <button @click="decrement">点我-</button>
    </div>
</template>

<script setup lang="ts" name="Count">
    import { ref } from 'vue';
    const n = ref(1);
    const sum = ref(0);
    const increment = () => {
        sum.value += n.value;
    };
    const decrement = () => {
        sum.value -= n.value;
    };
</script>

<style scoped>
.count {
    background-color: skyblue;
    /* 内边距 */
    padding: 20px;
    /* 圆角 */
    border-radius: 10px;
    /* 阴影 */
    box-shadow: 0 0 10px;
}
</style>