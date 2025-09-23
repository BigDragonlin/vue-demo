import { defineStore } from 'pinia'
import axios from 'axios';
import { nanoid } from 'nanoid';

export const useLoveTalkStore = defineStore('loveTalk', {
    actions: {
        async getLoveTalk() {
            let {data: {content: title}} = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json');
            this.talkList.unshift({id: nanoid(), info: title});
        }
    },
    state: () => ({
        talkList: JSON.parse(localStorage.getItem('loveTalkList') || '[]')
    })
})