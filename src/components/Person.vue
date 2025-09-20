<template>
    <div class="person">
        <h1>监视【reactive】定义的对象</h1>
        <h2>Name: {{ person.name }}</h2>
        <h2>Age: {{ person.age }}</h2>
        <button @click="changeName">点我name改李四名字</button>
        <button @click="changePerson">点我person改李四所有信息</button>
    </div>
</template>


<script lang="ts" setup name = "Person">
    import { reactive, watch } from 'vue';
    let person = reactive({
        name: '张三',
        age: 18
    })
    function changeName() {
        person.name = '李四'
    }
    function changePerson() {
        //使用reactive时修改对象
        Object.assign(person, {
            name: '李四',
            age: 20
        })
    }

    // 监视 情况三：监视reactive定义的对象中某个属性改变。reactive默认开启隐式的深度监视，所以任何属性变化都会触发监视
    watch(person, (newVal, oldVal) => {
        console.log('person的值发生了变化', newVal, oldVal)
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