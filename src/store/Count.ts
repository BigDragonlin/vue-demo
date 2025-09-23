import { defineStore } from 'pinia'

export const useCountStore = defineStore('count', {
    actions: {
        addCount(num: number) {
            this.count += num
        }
    },
    // 真正存数据的地方
    state: () => ({
        count: 8,
        school: 'donghualigong',
        subject: '计算机科学与技术'
    }),

    getters: {
        bigCount(): number {
            return this.count * 10
        },
        upperSchool(): string {
            return this.school.toUpperCase()
        }
    }
})