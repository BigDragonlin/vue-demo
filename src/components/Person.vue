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

    <hr></hr>
    <p>A: {{ a }}</p>
    <p>B: {{ b }}</p>
    <p>setUPName: {{ c }}</p>
    <p>anotherName: {{ d }}</p>
    <button @click="alertB">查看B</button>
</template>

<script>
export default {
    name: 'Person',
    data() {
        return {
            a: '显示A',
            b: '显示B',
            // 在选项式布局中，可以使用this.name获取setup中的name
            c: this.name,
            // 在选项式布局中，可以使用this.anotherName获取setup中的anotherName,但是一定要return
            d: this.anotherName
        }
    },

    methods: {
        alertB() {
            alert(this.a)
        },
    },

    setup() {
        let name = 'John'
        let age = 20
        let tel = '1234567890'
        let anotherName = 'anotherName'
        // 在setup中，不可以通过this.name获取选项式布局中的name，this是undefined
        function changeName() {
            name = 'Tom'
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