// /src/pages/hot/hot.vue
<script setup lang="ts">
	import{onLoad} from '@dcloudio/uni-app'
	import { getHotDataService } from '../../api/hot';
import {  subType } from '../../types/hot';
import { ref } from 'vue';

	onLoad(()=>{
		getHotData()
	})
	// 热门推荐页 标题和url
	const hotMap = [
	  { type: '1', title: '特惠推荐', url: '/hot/preference' },
	  { type: '2', title: '爆款推荐', url: '/hot/inVogue' },
	  { type: '3', title: '一站买全', url: '/hot/oneStop' },
	  { type: '4', title: '新鲜好物', url: '/hot/new' },
	]
	const query=defineProps<{
		type:string
	}>()
	console.log('query:',query)
	const nowhot=hotMap.find(v => v.type===query.type)
	console.log('nowhot:',nowhot)
	uni.setNavigationBarTitle({
		title:nowhot.title
	})

	//获取页面数据
	// const nowHotData=ref<HotData>()
	const pic=ref('')
	const subs=ref<(subType&{havemore?:boolean})[]>()
	const getHotData=async()=>{
		const res=await getHotDataService(nowhot.url)
		console.log('推荐页面获取数据接口返回res:',res)
		// nowHotData.value.bannerPicture=res.result.bannerPicture
		pic.value=res.result.bannerPicture
		// nowHotData.value.subType=res.result.subType
		subs.value=res.result.subTypes
	}
	
	const activeIndex=ref(0)
	
	//滚动到底部
	const onLower=async()=>{
		if(subs.value[activeIndex.value].goodsItems.page < subs.value[activeIndex.value].goodsItems.pages){
			console.log(subs.value[activeIndex.value])
			subs.value[activeIndex.value].goodsItems.page++
			const res=await getHotDataService(nowhot.url,{
				subType:subs.value[activeIndex.value].id,
				pageSize:subs.value[activeIndex.value].goodsItems.pageSize,
				page:subs.value[activeIndex.value].goodsItems.page
			})
			const newGoods=res.result.subTypes[activeIndex.value].goodsItems.items
			subs.value[activeIndex.value].goodsItems.items.push(...newGoods)
		}
		else{
			subs.value[activeIndex.value].havemore=false
			uni.showToast({
				'title':'没有更多数据了',
				icon:'none'
			})
		}
	}
</script>

<template>
  <view class="viewport">
    <!-- 推荐封面图 -->
    <view class="cover">
      <image
        :src="pic"
		class="img"
      ></image>
    </view>
    <!-- 推荐选项 -->
    <view class="tabs">
      <!-- <text class="text active">抢先尝鲜</text>
      <text class="text">新品预告</text> --> 
	  <text class="text" 
	  v-for="(subType,index) in subs"
	   :key="subType.id" 
	   :class="{active:index===activeIndex}"
	   @tap="activeIndex=index"
	  >{{subType.title}}</text>
    </view>
    <!-- 推荐列表 -->
    <scroll-view
	 scroll-y 
	 class="scroll-view"
	 v-for="(subType,index) in subs"
	 :key="subType.id"
	 v-show="index === activeIndex"
	 @scrolltolower="onLower()"
	>
      <view class="goods">
        <navigator
          hover-class="none"
          class="navigator"
          v-for="goods in subType.goodsItems.items"
          :key="goods.id"
          :url="`/pages/goods/goods?id=${goods.id}`"
        >
          <image
            class="thumb"
            :src="goods.picture"
          ></image>
          <view class="name ellipsis">{{goods.name}}</view>
          <view class="price">
            <text class="symbol">¥</text>
            <text class="number">{{goods.price}}</text>
          </view>
        </navigator>
      </view>
      <view class="loading-text">{{subType.havemore ? '正在加载...' : '人家也是有底线的'}}</view>
    </scroll-view>
  </view>
</template>

<style lang="scss">
page {
  height: 100%;
  background-color: #f4f4f4;
}
.viewport {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 180rpx 0 0;
  position: relative;
}
.cover {
  width: 750rpx;
  height: 225rpx;
  border-radius: 0 0 40rpx 40rpx;
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;
}
.img{
	width: 750rpx;
	height: 225rpx;
}
.scroll-view {
  height: 0;
  flex: 1;
}
.tabs {
  display: flex;
  justify-content: space-evenly;
  height: 100rpx;
  line-height: 90rpx;
  margin: 0 20rpx;
  font-size: 28rpx;
  border-radius: 10rpx;
  box-shadow: 0 4rpx 5rpx rgba(200, 200, 200, 0.3);
  color: #333;
  background-color: #fff;
  position: relative;
  z-index: 9;
  .text {
    margin: 0 20rpx;
    position: relative;
  }
  .active {
    &::after {
      content: '';
      width: 40rpx;
      height: 4rpx;
      transform: translate(-50%);
      background-color: #27ba9b;
      position: absolute;
      left: 50%;
      bottom: 24rpx;
    }
  }
}
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 20rpx 20rpx;
  .navigator {
    width: 300rpx;
    padding: 20rpx;
    margin-top: 20rpx;
    border-radius: 10rpx;
    background-color: #fff;
  }
  .thumb {
    width: 305rpx;
    height: 305rpx;
  }
  .name {
    height: 88rpx;
    font-size: 26rpx;
  }
  .price {
    line-height: 1;
    color: #cf4444;
    font-size: 30rpx;
  }
  .symbol {
    font-size: 70%;
  }
  .decimal {
    font-size: 70%;
  }
}

.loading-text {
  text-align: center;
  font-size: 28rpx;
  color: #666;
  padding: 20rpx 0 50rpx;
}
</style>