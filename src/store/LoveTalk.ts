import { defineStore } from 'pinia'

export const useLoveTalkStore = defineStore('loveTalk', {
    state: () => ({
        talkList: [
            {id: "1", info: '土味1'},
            {id: "2", info: '土味2'},
            {id: "3", info: '土味3'},
        ]
    })
})