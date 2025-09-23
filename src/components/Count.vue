<template>
    <div class="count">
        <h2>当前求和为{{ count }}</h2>
        <h2>当前求和的10倍为{{ bigCount }}</h2>
        <h2>当前学校为{{ school }}</h2>
        <h2>当前学校大写为{{ upperSchool }}</h2>
        <h2>当前专业为{{ subject }}</h2>
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
    import { useCountStore } from '@/store/Count';
    import { storeToRefs } from 'pinia';
    let countStore = useCountStore();
    // 解构不丢失响应式
    let { count, school, subject, bigCount, upperSchool } = storeToRefs(countStore);
    const n = ref(1);
    const increment = () => {
        countStore.addCount(n.value);
    };
    const decrement = () => {
        countStore.count -= n.value;
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