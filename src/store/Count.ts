import { defineStore } from 'pinia'

export const useCountStore = defineStore('count', {
    // 真正存数据的地方
    state: () => ({
        count: 8
    })
})