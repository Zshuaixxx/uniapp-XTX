<script setup lang="ts">
  import {onMounted, ref} from 'vue'
  import { GuessItem } from '../types/globe';
  import { getHomeGoodsGuessLikeService } from '../api/home';
  import { nowpage } from '../types/home';
  
  onMounted(()=>{
	  getGuessList()
  })
  //猜你喜欢数据
  const finsh=ref(false)
  const Homepage=ref(1)
  const HomepageSize=ref(10)
  const GuessList=ref<GuessItem<nowpage>>({
	  counts:10,
	  pageSize:10,
	  pages:1,
	  page:34,
	  items:[]
  })
  const getGuessList=async(page=Homepage.value,pageSize=HomepageSize.value)=>{
	  if(finsh.value){
		  return uni.showToast({
			title:'没有更多数据了',
			icon:'none'
		})
	  }
  	const res=await getHomeGoodsGuessLikeService(page,pageSize)
  	console.log('首页获取猜你喜欢数据接口返回：',res)
  	if(res.result.items.length===0){
		finsh.value=true
		uni.showToast({
			title:'没有更多数据了',
			icon:'none'
		})
	}else{
		GuessList.value.items.push(...res.result.items)
		console.log('猜你喜欢数组赋值后：',GuessList.value.items)
	}
  }
  defineExpose({
  	  getGuessList,
	  Homepage,
	  HomepageSize
  })
</script>

<template>
  <!-- 猜你喜欢 -->
  <view class="caption">
    <text class="text">猜你喜欢</text>
  </view>
  <view class="guess">
    <navigator
      class="guess-item"
      v-for="item in GuessList.items"
      :key="item.id"
      :url="`/pages/goods/goods?id={{item.id}}`"
    >
      <image
        class="image"
        mode="aspectFill"
        :src="item.picture"
      ></image>
      <view class="name">{{item.name}}</view>
      <view class="price">
        <text class="small">¥</text>
        <text>{{item.price}}</text>
      </view>
    </navigator>
  </view>
  <view class="loading-text"> {{finsh?'人家也是有底线的':'正在加载... '}}</view>
</template>

<style lang="scss">
:host {
  display: block;
}
/* 分类标题 */
.caption {
  display: flex;
  justify-content: center;
  line-height: 1;
  padding: 36rpx 0 40rpx;
  font-size: 32rpx;
  color: #262626;
  .text {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 28rpx 0 30rpx;

    &::before,
    &::after {
      content: '';
      width: 20rpx;
      height: 20rpx;
      background-image: url(@/static/images/bubble.png);
      background-size: contain;
      margin: 0 10rpx;
    }
  }
}

/* 猜你喜欢 */
.guess {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 20rpx;
  .guess-item {
    width: 300rpx;
    padding: 24rpx 20rpx 20rpx;
    margin-bottom: 20rpx;
    border-radius: 10rpx;
    overflow: hidden;
    background-color: #fff;
  }
  .image {
    width: 304rpx;
    height: 304rpx;
  }
  .name {
    height: 75rpx;
    margin: 10rpx 0;
    font-size: 26rpx;
    color: #262626;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .price {
    line-height: 1;
    padding-top: 4rpx;
    color: #cf4444;
    font-size: 26rpx;
  }
  .small {
    font-size: 80%;
  }
}
// 加载提示文字
.loading-text {
  text-align: center;
  font-size: 28rpx;
  color: #666;
  padding: 20rpx 0;
}
</style>