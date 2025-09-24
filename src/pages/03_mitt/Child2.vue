<template>
  <div class="child2">
    <h3>子组件2</h3>
	<h3>我的玩具：{{ toy }}</h3>
	<h3 v-show="brotherToy">哥哥给我的玩具：{{ brotherToy }}</h3>
  </div>
</template>

<script setup lang="ts" name="Child2">
	import {ref, onUnmounted} from 'vue'
	import emitter from '@/utils/emitter'
	let toy = ref('奥特曼')
	let brotherToy = ref('')
	emitter.on('sendToy',(value:any)=>{
		brotherToy.value = value
	})
	// 卸载组件时解绑事件
	onUnmounted(()=>{
		emitter.off('sendToy')
	})
</script>

<style scoped>
	.child2{
		margin-top: 50px;
		background-color: orange;
		padding: 10px;
		box-shadow: 0 0 10px black;
		border-radius: 10px;
	}
</style>