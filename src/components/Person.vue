<template>
    <div class="person">
        <p>Person</p>
        <p>Name: {{ name }}</p>
        <p>Age: {{ age }}</p>
        <button @click="changeName">修改姓名</button>
        <button @click="changAge">修改年龄</button>
    </div>
    <hr>
</template>


<script lang="ts" setup name = "Person">
    import { reactive, toRefs, toRef } from 'vue';
    let person = reactive({
        name: '张三',
        age: 18
    })

    console.log(toRefs(person))
    let {name, age} = toRefs(person)
    let nl = toRef(person, 'age')
    function changeName() {
        name.value += '~'
        console.log(person)
        console.log(name)
    }
    function changAge() {
        age.value++
        console.log(person)
        console.log(age)
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