<template>
    <div class="person">
        <p> sum: {{ sum }}</p>
        <button @click="add">+</button>
    </div>
    <hr>
</template>


<script lang="ts" setup name = "Person">
    import { ref } from 'vue';
    let sum = ref(0)
    function add() {
        // 就像reactive一样，ref也不能这么写
        // sum = ref(9)
        sum.value = 9
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