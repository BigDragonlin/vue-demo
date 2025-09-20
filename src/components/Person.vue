<template>
    <div class="person">
        <p>Name: {{ car.name }}</p>
        <p>Price: {{ car.price }}</p>
        <p>Color: {{ car.color }}</p>
        <button @click="changCar">换车</button>
    </div>
    <hr>
</template>


<script lang="ts" setup name = "Person">
    import { reactive } from 'vue';
    let car = reactive({
        name: '宝马',
        price: 1000000,
        color: '红色'
    })
    function changCar() {
        // 直接复制不更新
        // car = {
        //     name: '奔驰',
        //     price: 2000000,
        //     color: '蓝色'
        // }

        // 直接赋值不更新
        // car = ref({
        //     name: '奔驰',
        //     price: 2000000,
        //     color: '蓝色'
        // })
        Object.assign(car, {
            name: '奔驰',
            price: 2000000,
            color: '蓝色'
        })
    }
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