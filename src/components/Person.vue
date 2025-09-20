<template>
    <div class="person">
        <p>Name: {{ car.name }}</p>
        <p>Price: {{ car.price }}</p>
        <p>Color: {{ car.color }}</p>
        <button @click="changePrice">涨价</button>
    </div>
    <hr> </hr>
    <ul>
        <li v-for="game in games" :key="game.id">
            Name: {{ game.name }}
            Price: {{ game.price }}
        </li>
        <button @click="changeGamePrice">涨价</button>
    </ul>

    <hr> </hr>
    <p>C: {{ test.a.b.c }}</p>
    <button @click="changeC">涨价</button>
</template>


<script lang="ts" setup name = "Person">
    import { reactive } from 'vue';

    let car = reactive({
        name: '宝马',
        price: 1000000,
        color: '红色'
    })

    let games = reactive([
        {id: 1, name: '王者荣耀', price: 100},
        {id: 2, name: '和平精英', price: 100},
        {id: 3, name: '原神', price: 100},
    ])

    // reactive包裹对象叫做响应式对象，影响是深层次的
    let test = reactive({
        a :{
            b :{
                c : 100
            }
        }
    })
    function changePrice() {
        car.price += 10
    }

    function changeGamePrice() {
        games[0].price += 10
    }

    function changeC() {
        test.a.b.c += 10
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