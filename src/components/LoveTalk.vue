<template>
    <div class="love-talk">
        <ul v-for="value in talkList" :key="value.id">
            <li>{{ value.info }}</li>
        </ul>
        <button @click="getLoveTalk">获取土味情话</button>
    </div>
</template>

<script setup lang="ts" name="LoveTalk">
    import { ref } from 'vue';
    import axios from 'axios';
    import { nanoid } from 'nanoid';
    let talkList = ref([
        {id: "1", info: '土味1'},
        {id: "2", info: '土味2'},
        {id: "3", info: '土味3'},
    ]);

    async function getLoveTalk() {
        let {data: {content: title}} = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json');
        // let data = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json');
        // console.log(title);
        // console.log(data);
        talkList.value.unshift({id: nanoid(), info: title});
    }
</script>

<style scoped>
    .love-talk {
        background-color: orange;
        /* 内边距 */
        padding: 20px;
        /* 圆角 */
        border-radius: 10px;
        /* 阴影 */
        box-shadow: 0 0 10px;
    }
</style>