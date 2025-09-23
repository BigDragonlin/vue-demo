import { defineStore } from 'pinia'
import axios from 'axios';
import { nanoid } from 'nanoid';

// export const useLoveTalkStore = defineStore('loveTalk', {
//     actions: {
//         async getLoveTalk() {
//             let {data: {content: title}} = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json');
//             this.talkList.unshift({id: nanoid(), info: title});
//         }
//     },
//     state: () => ({
//         talkList: JSON.parse(localStorage.getItem('loveTalkList') || '[]')
//     })
// })

import { ref } from 'vue';
export const useLoveTalkStore = defineStore('loveTalk', () => {
    const talkList = ref(JSON.parse(localStorage.getItem('loveTalkList') || '[]'))

    async function getLoveTalk() {
        let {data: {content: title}} = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json');
        talkList.value.unshift({id: nanoid(), info: title});
        localStorage.setItem('loveTalkList', JSON.stringify(talkList.value));
    }

    return {
        talkList,
        getLoveTalk
    }
})