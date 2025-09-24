<template>
  <div class="father">
    <h3>父组件</h3>
	<h4>父亲有：{{ car }}</h4>
	<h4 v-if="toy">儿子给的玩具：{{ toy }}</h4>
	<button @click="sendCarToSon">把车给儿子</button>
	<Child :car="sonCar" :sendToy="getToy"/>
  </div>
</template>

<script setup lang="ts" name="Father">
	import Child from './Child.vue'
	import { ref } from 'vue'
	let car = ref('奔驰')
	let sonCar = ref('')
	let toy = ref('')
	function sendCarToSon(){
		sonCar.value = car.value
	}
	function getToy(value:string){
		toy.value = value
	}
</script>

<style scoped>
	.father{
		background-color:rgb(165, 164, 164);
		padding: 20px;
		border-radius: 10px;
	}
</style>