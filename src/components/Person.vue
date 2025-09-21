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
    import useSum from '@/hooks/useSum';
    import useDog from '@/hooks/useDog';
    const { sum, addSum } = useSum();
    const { dogList, getDog } = useDog();
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
        height: 300px;
        /* 间隙 */
        margin: 10px;
    }
</style>