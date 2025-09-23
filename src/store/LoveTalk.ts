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
        talkList: [
            {id: "1", info: '土味1'},
            {id: "2", info: '土味2'},
            {id: "3", info: '土味3'},
        ]
    })
})