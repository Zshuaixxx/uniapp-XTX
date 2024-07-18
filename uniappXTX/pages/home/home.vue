<script setup lang="ts">
	import CustomNavbar from './components/CustomNavbar.vue';
	const res=uni.getSystemInfoSync()
	console.log(res)
</script>

<style>
	/* #ifdef H5 */
	uni-page-body {
		padding-top: 44px;
	}
	/* #endif */
</style>


<template>
	<CustomNavbar></CustomNavbar>
</template>


<style>
	       
</style>
