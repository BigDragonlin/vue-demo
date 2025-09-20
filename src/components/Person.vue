<template>
    <div class="person">
        <h1>监视【ref】定义的基本类型数据</h1>
        <h2>当前求和为：{{ sum }}</h2>
        <button @click="changeSum">点我sum加1</button>
    </div>
</template>


<script lang="ts" setup name = "Person">
    import { ref, watch } from 'vue';
    let sum = ref(0)
    function changeSum() {
        sum.value++
    }

    //监视：情况1️一：监视ref定义的基本类型数据
    let stopWatch = watch(sum, (newVal, oldVal) => {
        console.log('sum的值发生了变化', newVal, oldVal)
        if (sum.value >= 5) {
            stopWatch()
        }
    })
</script>

<style>
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