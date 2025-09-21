//全局定义类
export interface PersonInter {
    id: number
    name: string
    age: number
    sex?: string
}

//自定义类型
export type PersonsInter = Array<PersonInter>
