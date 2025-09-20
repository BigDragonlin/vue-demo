<template>
    <div class="person">
        <h1>监视【ref】定义的类</h1>
        <h2>Name: {{ person.name }}</h2>
        <h2>Age: {{ person.age }}</h2>
        <button @click="changeName">点我name改李四</button>
        <button @click="changePerson">点我person改李四</button>
    </div>
</template>


<script lang="ts" setup name = "Person">
    import { ref, watch } from 'vue';
    let person = ref({
        name: '张三',
        age: 18
    })
    function changeName() {
        person.value.name = '李四'
    }
    function changePerson() {
        person.value = {
            name: '李四',
            age: 20
        }
    }
    // 监视：情况2️一：监视ref定义的对象类型数据
    // 只有地址变的话，才会触发监视
    // watch(person, (newVal, oldVal) => {
    //     console.log('person的值发生了变化', newVal, oldVal)
    // })

    // 深度监视，监视对象中所有属性的变化
    // watch(person, (newVal, oldVal) => {
    //     console.log('person的值发生了变化', newVal, oldVal)
    // }, { deep: true })

    // 立即监视
    watch(() => person, (newVal, oldVal) => {
        console.log('person的值发生了变化', newVal, oldVal)
    },{ immediate: true ,deep: true })

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