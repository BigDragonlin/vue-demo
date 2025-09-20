<template>
    <div class="person">
        <h1>姓名：{{ person.name }}</h1>
        <h1>年龄：{{ person.age }}</h1>
        <h1>汽车：{{ person.car.c1}}、 {{ person.car.c2 }}</h1>
        <button @click="person.name += '~'">点我name改李四名字</button>
        <button @click="person.age++">点我age加1</button>
        <button @click="person.car.c1 += '~'">点我c1改宝马</button>
        <button @click="person.car.c2 += '~'">点我c2改奔驰</button>
        <button @click="changeCar">点我changeCar</button>
    </div>
</template>


<script lang="ts" setup name = "Person">
    import { reactive, watch } from 'vue';
    let person = reactive({
        name: '张三',
        age: 18,
        car: {
            c1: '宝马',
            c2: '奔驰'
        }
    })
    function changeCar() {
        person.car = {
            c1: '宝马',
            c2: '奔驰'
        }
    }

    // 监视 情况五：监视reactive定义的对象中某些属性的改变
    watch([()=>person.name, ()=>person.car.c1], (newVal, oldVal) => {
        console.log('person的name和car.c1发生了变化', newVal, oldVal)
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