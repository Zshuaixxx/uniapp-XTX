<script setup lang="ts">
	import { ref } from 'vue';
	import { onLoad } from'@dcloudio/uni-app'
	
	import CustomNavbar from './components/CustomNavbar.vue';
	import XtxSwiper from '../../components/XtxSwiper.vue';
	import{getHomeBannerService}from '../../api/home'
	import { BannerItem } from '../../types/home';
	
	onLoad(()=>{
		getBannerList()
	})
	
	//轮播图数据
	const BannerList=ref<BannerItem[]>([])
	const getBannerList=async()=>{
		const res=await getHomeBannerService(1)
		console.log('首页轮播图接口返回：',res)
		BannerList.value=res.result
	}
	
</script>

<template>
	<CustomNavbar></CustomNavbar>
	<XtxSwiper :list="BannerList"></XtxSwiper>
</template>


<style>
	       
</style>
