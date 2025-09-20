<template>
    <div class="person">
        <h1>当水温达到60度或者水位达到80cm时，给服务期发请求</h1>
        <h1>当前的水温是：{{ temperature }}</h1>
        <h1>当前的水位是：{{ water }}</h1>
        <button @click="addTemperature">水温+10</button>
        <button @click="addWater">水位+10</button>
    </div>
</template>


<script lang="ts" setup name = "Person">
    import { ref, watch, watchEffect } from 'vue';
    let temperature = ref(10)
    let water = ref(15)
    function addTemperature() {
        temperature.value += 10
    }
    function addWater() {
        water.value += 10
    }

    // watch的写法
    // watch([()=>temperature.value, ()=>water.value], (newVal, oldVal) => {
    //     if(newVal[0] >= 60 || newVal[1] >= 80) {
    //         console.log('水温达到60度或者水位达到80cm时，给服务期发请求')
    //     }
    // })

    // watchEffect的写法
    watchEffect(() => {
        if(temperature.value >= 60 || water.value >= 80) {
            console.log('水温达到60度或者水位达到80cm时，给服务期发请求')
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