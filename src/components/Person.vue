<template>
    <div class="person">
        <p>Name: {{ car.name }}</p>
        <p>Price: {{ car.price }}</p>
        <p>Color: {{ car.color }}</p>
        <button @click="changePrice">涨价</button>
    </div>
    <hr>
</template>


<script lang="ts" setup name = "Person">
    import { ref } from 'vue';

    let car = ref({
        name: '宝马',
        price: 1000000,
        color: '红色'
    })
    function changePrice() {
        car.value.price += 10
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