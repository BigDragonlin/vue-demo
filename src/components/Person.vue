<template>
    <div class="person">
        <h1>中国</h1>
        <h2 ref="say">浙江</h2>
        <h3>杭州</h3>
        <button @click="showH2">显示h2</button>
    </div>
</template>


<script lang="ts" setup name = "Person">
    import { ref, defineExpose } from 'vue'
    let say = ref(null)
    function showH2() {
        console.log(say.value)
    }
    let p1 = ref(100)
    let p2 = ref(200)
    // 暴露出去给父组件
    defineExpose({
        p1,
        p2
    })


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