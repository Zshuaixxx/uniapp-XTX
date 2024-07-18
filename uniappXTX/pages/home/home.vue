<script setup lang="ts">
	import { ref } from 'vue';
	import { onLoad } from'@dcloudio/uni-app'
	import CustomNavbar from './components/CustomNavbar.vue';
	import XtxSwiper from '../../components/XtxSwiper.vue';
	import CategoryPnael from './components/CategoryPanel.vue';
	import HotPanel from './components/HotPanel.vue';
	import XtxGuess from '../../components/XtxGuess.vue'
	import{getHomeBannerService, getHomeCategoryMmutliService, getHomeHotMutliService}from '../../api/home'
	import { BannerItem, CategoryItem,  HotItem } from '../../types/home';
	
	onLoad(()=>{
		getBannerList()
		getCategoryList()
		getHotList()

	})
	
	//轮播图数据
	const BannerList=ref<BannerItem[]>([])
	const getBannerList=async()=>{
		const res=await getHomeBannerService(1)
		console.log('首页轮播图接口返回：',res)
		BannerList.value=res.result
	}
	
	//分类数据
	const CategoryList=ref<CategoryItem[]>([])
	const getCategoryList=async()=>{
		const res=await getHomeCategoryMmutliService()
		console.log('首页分类接口返回：',res)
		CategoryList.value=res.result
	}
	
	//热门推荐数据
	const HotList=ref<HotItem[]>([])
	const getHotList=async()=>{
		const res=await getHomeHotMutliService()
		console.log('首页获取热门推荐数据接口返回:',res)
		HotList.value=res.result
	}
	

</script>

<template>
	<!-- 导航栏 -->
	<CustomNavbar></CustomNavbar>
	<!-- 轮播图 -->
	<XtxSwiper :list="BannerList"></XtxSwiper>
	<!-- 分类 -->
	<CategoryPnael :list="CategoryList"></CategoryPnael>
	<!-- 热门推荐 -->
	<HotPanel :list="HotList"></HotPanel>
	<!-- 猜你喜欢 -->
	<XtxGuess :obj="GuessList"></XtxGuess>
</template>


<style>
	page{
		background-color: #f7f7f7;
	}
</style>
