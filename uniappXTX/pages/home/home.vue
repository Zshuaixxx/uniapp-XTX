<template>
	<template>
		<view>
			<uni-section title="基本用法" type="line" padding>
				<uni-steps :options="list1" :active="active" />
			</uni-section>
			<uni-section title="自定义图标" type="line" padding>
				<uni-steps :options="list1" active-icon="checkbox" :active="active" />
			</uni-section>
			<uni-section title="自定义图标" type="line" padding>
				<uni-steps :options="list1" active-icon="medal" :active="active" />
			</uni-section>
			<uni-section title="纵向排列" type="line" padding>
				<uni-steps :options="list2" active-color="#007AFF" :active="active" direction="column" />
			</uni-section>
			<button type="primary" size="mini" style="margin: 30px 10px; width: 100px;" @click="change">改变状态</button>
		</view>
	</template>
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

<script setup>
	import { useMemberStore } from '../../stores';
	import '../../utils/http'
	const memberStore=useMemberStore()
	const re=()=>{
		console.log('发送请求')
		uni.request({
			method:'GET',
			url:"/home/goods/guessLike"
		})
	}
</script>

<style>
	       
</style>
