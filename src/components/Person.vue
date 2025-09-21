<template>
    <div class="person">
        <h1>中国</h1>
        <h2 ref="say">浙江</h2>
        <h3>杭州</h3>
        <button @click="showH2">显示h2</button>
    </div>
</template>


<script lang="ts" setup name = "Person">
    import { ref } from 'vue'
    let say = ref(null)
    function showH2() {
        console.log(say.value)
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