<template>
    <div class="love-talk">
        <ul v-for="value in loveTalkStore.talkList" :key="value.id">
            <li>{{ value.info }}</li>
        </ul>
        <button @click="getLoveTalk">获取土味情话</button>
    </div>
</template>

<script setup lang="ts" name="LoveTalk">
    import { useLoveTalkStore } from '@/store/LoveTalk';
    let loveTalkStore = useLoveTalkStore();
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