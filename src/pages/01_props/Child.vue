<template>
  <div class="child">
    <h3>子组件</h3>
	 <h4 v-if="car">父亲给的car：{{ car }}</h4>
	 <h4>儿子有：{{ toy }}</h4>
	 <button @click="sendToy(toy)">把玩具给父亲</button>
  </div>
</template>

<script setup lang="ts" name="Child">
	import { ref } from 'vue'
	defineProps(['car','sendToy'])
	let toy = ref('奥特曼')
</script>

<style scoped>
	.child{
		background-color: skyblue;
		padding: 10px;
		box-shadow: 0 0 10px black;
		border-radius: 10px;
	}
</style>
