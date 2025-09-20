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

<script>
export default {
    name: 'Person',
    setup() {
        let name = 'John'
        let age = 20
        let tel = '1234567890'
        // 这个this是undefined 
        // console.log(this)
        // console.log(this)
        function changeName() {
            console.log('changeName')
            name = 'Tom'
            // 点击不会更改name，是因为name是响应式数据
            console.log(name)
        }
        function changeAge() {
            age += 1
        }

        function showPhone() {
            alert(tel)
        }
        return{
            name,
            age,
            tel,
            changeName,
            changeAge,
            showPhone
        }
    }
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