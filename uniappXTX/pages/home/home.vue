<script setup lang="ts">
	import { ref } from 'vue';
	import { onLoad } from'@dcloudio/uni-app'
	
	import CustomNavbar from './components/CustomNavbar.vue';
	import XtxSwiper from '../../components/XtxSwiper.vue';
	import CategoryPnael from './components/CategoryPanel.vue';
	import{getHomeBannerService, getHomeCategoryMmutliService}from '../../api/home'
	import { BannerItem, CategoryItem } from '../../types/home';
	
	onLoad(()=>{
		getBannerList()
		getCategoryList()
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
</script>

<template>
	<CustomNavbar></CustomNavbar>
	<XtxSwiper :list="BannerList"></XtxSwiper>
	<CategoryPnael :list="CategoryList"></CategoryPnael>
</template>


<style>
	page{
		background-color: #f7f7f7;
	}
</style>
