<template>
    <div>???</div>
</template>


<script lang="ts" setup name = "Person">
    import { ref, defineExpose } from 'vue'
    import { type PersonInter, type PersonsInter } from '@/types'
    let person: PersonInter = {
        name: '张三',
        age: 18,
    }

    let persons: Array<PersonInter> = [
        {
            name: '李四',
            age: 20,
        },
        {
            name: '王五',
            age: 22,
        },
    ]

    let newPersons: PersonsInter = [
        {
            name: '赵六',
            age: 24,
        },
        {
            name: '孙七',
            age: 26,
        },
    ]
</script>

<style scoped>
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