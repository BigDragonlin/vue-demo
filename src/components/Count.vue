<template>
    <div class="count">
        <h2>当前求和为{{ countStore.count }}</h2>
        <h2>当前学校为{{ countStore.school }}</h2>
        <h2>当前专业为{{ countStore.subject }}</h2>
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
    let countStore = useCountStore();

    const n = ref(1);
    const increment = () => {
        //第一种修改pinia中数据的方式
        // countStore.count += n.value;

        //第二种修改pinia中数据的方式
        // countStore.$patch({
        //     count: countStore.count + n.value,
        //     school: '南昌大学',
        //     subject: '软件工程'
        // });

        //第三种修改pinia中数据的方式
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