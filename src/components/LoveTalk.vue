<template>
    <div class="love-talk">
        <ul v-for="value in talkList" :key="value.id">
            <li>{{ value.info }}</li>
        </ul>
        <button @click="getLoveTalk">获取土味情话</button>
    </div>
</template>

<script setup lang="ts" name="LoveTalk">
    import { useLoveTalkStore } from '@/store/LoveTalk';
    import { storeToRefs } from 'pinia';
    let loveTalkStore = useLoveTalkStore();
    // 订阅loveTalkStore,有变化就调用
    loveTalkStore.$subscribe((mutation, state) => {
        localStorage.setItem('loveTalkList', JSON.stringify(state.talkList));
    });
    let { talkList } = storeToRefs(loveTalkStore);
    function getLoveTalk() {
        loveTalkStore.getLoveTalk();
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