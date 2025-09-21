 <!-- 组件的结构 -->
 <template>
    <Person />
</template>   

 <!-- 组件的逻辑 -->
 <script setup lang="ts" name="App">
    // 引入Person组件
    import Person from './components/Person.vue'
</script>

 <!-- 组件的样式 -->
<style scoped>
    .app {
        background-color: #f0f0f0;
        padding: 20px;
        border-radius: 10px;
    }
</style>