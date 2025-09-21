 <!-- 组件的结构 -->
 <template>
    <Person :list="persons"/>
</template>   

 <!-- 组件的逻辑 -->
 <script setup lang="ts" name="App">
    // 引入Person组件
    import Person from './components/Person.vue'
    import { type PersonsInter } from '@/types'
    let persons: PersonsInter = [
        {
            id: 1,
            name: '张三',
            age: 18,
        },
        {
            id: 2,
            name: '李四',
            age: 20,
            sex: '男'
        },
        {
            id: 3,
            name: '王五',
            age: 16,
        }
    ]
</script>