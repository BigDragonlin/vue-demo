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
    data() {
        return {
            name: 'John',
            age: 20,
            tel: '1234567890'
        }
    },
    methods: {
        changeName() {
            this.name = 'Tom'
        },
        changeAge() {
            this.age += 1
        },
        showPhone() {
            // 弹出电话号码
            alert(this.tel)
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
