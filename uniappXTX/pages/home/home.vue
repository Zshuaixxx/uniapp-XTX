<template>
	<uni-section class="mb-10" title="基础用法" sub-title="副标题"></uni-section>
	
	<uni-section class="mb-10" title="竖线装饰" sub-title="副标题" type="line"></uni-section>
	
	<uni-section class="mb-10" title="装饰器插槽" sub-title="副标题">
	  <template v-slot:decoration>
	    <view class="decoration"></view>
	  </template>
	</uni-section>
	
	<uni-section class="mb-10" title="默认插槽" sub-title="副标题">默认插槽内容</uni-section>
	
	<uni-section class="mb-10" title="主标题">
	  <template v-slot:right>
	    right slot
	  </template>
	</uni-section>
	<uni-card title="基础卡片" sub-title="副标题" extra="额外信息" thumbnail="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png">
		<text>这是一个带头像和双标题的基础卡片，此示例展示了一个完整的卡片。</text>
	</uni-card>
	<template>
		<text>
			?
			{{memberStore.profile.nikename}}
		</text>
		<button @tap="memberStore.setProfile({
			nikename:'左祥祥',
			token:'20050502'
		})">添加信息</button>
		<button @tap="memberStore.clearProfile()">删除信息</button>
		<button @tap="re()">发送请求</button>
	</template>
</template>

<script setup lang="ts">
	import { useMemberStore } from '../../stores';
	import {http} from '../../utils/http'
	const memberStore=useMemberStore()
	const re=async()=>{
		console.log('发送请求')
		const res = await http<any>({
			method:'GET',
			url:"/category/top"
		})
		console.log('返回',res)
	}
</script>

<style>
	       
</style>
