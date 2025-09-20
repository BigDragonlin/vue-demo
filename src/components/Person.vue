<template>
    <div class="person">
        姓：<input type="text" v-model="firstName">
        名：<input type="text" v-model="lastName">
        <button @click="changeFullName">修改全名</button>
        <p>全名方法1：{{ firstName }} - {{ lastName }}</p>
        <p>全名方法2：{{ getFullName() }}</p>
        <p>全名方法2：{{ getFullName() }}</p>
        <p>全名方法3：{{ fullName }}</p>
        <p>全名方法4：{{ fullName }}</p>    
    </div>
</template>


<script lang="ts" setup name = "Person">
    import { ref, computed } from 'vue';
    let firstName = ref('zhang')
    let lastName = ref('san')

    // 函数没有缓存
    function getFullName() {
        console.log('getFullName function is called')
        return firstName.value + ' ' + lastName.value
    }

    // 计算属性,计算属性有缓存,且是只读的
    // let fullName = computed(() => {
    //     console.log('fullName computed is called')
    //     return firstName.value + ' ' + lastName.value
    // })

    //计算属性，可读写
    let fullName = computed({
        get() {
            return firstName.value + ' ' + lastName.value
        },
        set(value) {
            let [tempFirstName, tempLastName] = value.split(' ')
            firstName.value = tempFirstName
            lastName.value = tempLastName
            
        }
    })
    function changeFullName() {
        fullName.value = 'wang' + ' ' + 'wu'
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