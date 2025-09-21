<template>
    <ul>
        <li v-for="item in list" :key="item.id">
            {{ item.id }} - {{ item.name }} - {{ item.age }} - {{ item.sex }}
        </li>
    </ul>
</template>


<script lang="ts" setup name = "Person">
    // difineProps和withDefaults是宏函数,可以不引入直接调用
    // import { defineProps, withDefaults } from 'vue';
    import { type PersonsInter } from '@/types';
    // 只接受list
    // defineProps(['list']);

    //接受list加限制类型
    // defineProps<{
    //     list: PersonsInter
    // }>();

    //接受list+限制类型+限制必要性+指定默认值
    withDefaults(defineProps<{
        list?: PersonsInter
    }>(), {
        list: () => [
            {
                id: 1,
                name: '张三',
                age: 18,
            },
            {
                id: 2,
                name: '李四',
                age: 20,
            }
        ]
    });
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