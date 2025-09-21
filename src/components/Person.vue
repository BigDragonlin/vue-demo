<template>
    <dic>sum: {{ sum }}</dic>
    <button @click="addSum">点我加一</button>
    <hr></hr>
    <!-- 图片展示 -->
    <img v-for="value in dogList" :src="value" alt="dog"></img>
    <hr></hr>
    <button @click="getDog">点我多加一只狗狗</button>
</template>


<script lang="ts" setup name = "Person">
    import axios from 'axios';
    import { ref } from 'vue';
    let sum = ref(0);
    function addSum() {
        sum.value++;
    }

    let dogList = ref([
        'https:\/\/images.dog.ceo\/breeds\/pembroke\/n02113023_3913.jpg',
    ]);

    async function getDog() {
        try {
            let res = await axios.get('https://dog.ceo/api/breed/pembroke/images/random');
            // console.log(res.data.message);
            dogList.value.push(res.data.message);
        } catch (error) {
            alert('获取狗狗失败'+error);
        }
    }
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

    img {
        width: 300px;
        /* 间隙 */
        margin: 10px;
    }
</style>