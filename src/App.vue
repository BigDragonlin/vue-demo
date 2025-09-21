 <!-- 组件的结构 -->
 <template>
    <Person/>
</template>   

 <!-- 组件的逻辑 -->
 <script setup lang="ts" name="App">
    import { onMounted } from 'vue';
    import Person from './components/Person.vue'
    onMounted(() => {
        console.log('father mounted');
    });
</script>