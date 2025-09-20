<template>
    <div class="person">
        <h1>Person</h1>
        <p>Name: {{ name }}</p>
        <p>Age: {{ age }}</p>
        <!-- 修改姓名 -->
        <button @click="changeName">修改姓名</button>
        <!-- 修改年龄 -->
        <button @click="changeAge">修改年龄</button>
        <!-- 点击查看电话号码 -->
         <button @click="showPhone">查看电话号码</button>
    </div>
</template>


<script lang="ts" setup name = "Person">
    import { ref } from 'vue'
    let name = ref('John')
    let age = ref(20)
    let tel = '1234567890'
    console.log(name)
    console.log(age)
    console.log(tel)

    // 在setup中，不可以通过this.name获取选项式布局中的name，this是undefined
    function changeName() {
        name.value = 'Tom'
    }
    function changeAge() {
        age.value += 1
    }

    function showPhone() {
        alert(tel)
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
</style>