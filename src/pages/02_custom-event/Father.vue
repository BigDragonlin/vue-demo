<template>
  <div class="father">
    <h3>父组件</h3>
	<h3 v-if="toy">从儿子手里拿到了玩具：{{ toy }}</h3>
	<Child @sendToy="getToy" />
  </div>
</template>

<script setup lang="ts" name="Father">
	import Child from './Child.vue'
	import { ref } from "vue";
	let toy = ref('')
	function getToy(value:string){
		console.log('getToy',value)
		toy.value = value
	}
</script>

<style scoped>
	.father{
		background-color:rgb(165, 164, 164);
		padding: 20px;
    border-radius: 10px;
	}
	.father button{
		margin-right: 5px;
	}
</style>