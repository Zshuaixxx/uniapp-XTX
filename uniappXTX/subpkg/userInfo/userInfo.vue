<script setup lang="ts">
	import{onLoad} from '@dcloudio/uni-app'
import { getMemberProfileService, updataUserInfoService } from '../../api/user';
import { userInfo } from '../../types/user';
import { ref } from 'vue';
import { useUserStore } from '../../stores';
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()

onLoad(()=>{
	getMemberProfile()
})

//获取用户信息
const userInfo=ref<userInfo>({} as userInfo)
const getMemberProfile=async()=>{
	const res=await getMemberProfileService()
	console.log('获取用户信息接口返回',res)
	userInfo.value=res.result
}
//换头像
const userStore=useUserStore()
const tapAvatar=()=>{
	uni.chooseImage({
		count:1,
		success:(res)=>{
			console.log('选择成功',res)
			console.log('选择的图片路径',res.tempFilePaths[0])
			uni.uploadFile({
				url:'/member/profile/avatar',
				filePath:res.tempFilePaths[0],
				name:'file',
				success:(Tres)=>{
					console.log('上传成功：',Tres)
					userInfo.value.avatar=res.tempFilePaths[0]
					userStore.profile.avatar=res.tempFilePaths[0]
					uni.navigateBack()
				}
			})
		}
	})
}
//修改用户信息
let localNum:string[]=null
const updataUserInfo=async()=>{
	if(localNum === null){
		const res=await updataUserInfoService({
			gender:userInfo.value.gender,
			nickname:userInfo.value.nickname,
			profession:userInfo.value.profession,
			birthday:userInfo.value.birthday,
		})
		console.log('修改用户信息接口返回：',res)
	}else{
		const res=await updataUserInfoService({
			gender:userInfo.value.gender,
			nickname:userInfo.value.nickname,
			profession:userInfo.value.profession,
			birthday:userInfo.value.birthday,
			provinceCode: localNum[0],
			cityCode:  localNum[1],
			countyCode:  localNum[2]
		})
		console.log('修改用户信息接口返回：',res)
		
	}
	userStore.profile.nickname= userInfo.value.nickname
	uni.navigateBack()
}

const sexChange=(e)=>{
	console.log('选择性别：',e.detail.value)
	userInfo.value.gender=e.detail.value
}
const birChangw=(e)=>{
	console.log('选择生日：',e)
	userInfo.value.birthday=e.detail.value
}
const loaclChange=(e)=>{
	console.log('选择地区：',e)
	userInfo.value.fullLocation=e.detail.value.join(' ')
	localNum=e.detail.code
}
</script>

<template>
  <view class="viewport">
    <!-- 导航栏 -->
    <view class="navbar" :style="{ paddingTop: safeAreaInsets?.top + 'px' }">
      <navigator open-type="navigateBack" class="back icon-left" hover-class="none"> back </navigator>
      <view class="title">个人信息</view>
    </view>
    <!-- 头像 -->
    <view class="avatar">
      <view class="avatar-content" @tap="tapAvatar">
        <image class="image" :src="userInfo?.avatar" mode="aspectFill" />
        <text class="text">点击修改头像</text>
      </view>
    </view>
    <!-- 表单 -->
    <view class="form">
      <!-- 表单内容 -->
      <view class="form-content">
        <view class="form-item">
          <text class="label">账号</text>
          <text class="account">{{userInfo?.account}}</text>
        </view>
        <view class="form-item">
          <text class="label">昵称</text>
          <input class="input" type="text" placeholder="请填写昵称" v-model="userInfo.nickname" />
        </view>
        <view class="form-item">
          <text class="label">性别</text>
          <radio-group @change="sexChange">
            <label class="radio">
              <radio value="男" color="#27ba9b" :checked="userInfo?.gender === '男'" />
              男
            </label>
            <label class="radio">
              <radio value="女" color="#27ba9b" :checked="userInfo?.gender === '女'" />
              女
            </label>
          </radio-group>
        </view>
        <view class="form-item">
          <text class="label">生日</text>
          <picker
            class="picker"
            mode="date"
            start="1900-01-01"
            :end="new Date()"
            :value="userInfo.birthday"
			@change="birChangw"
          >
            <view v-if="userInfo?.birthday">{{userInfo.birthday}}</view>
            <view class="placeholder" v-else>请选择日期</view>
          </picker>
        </view>
        <view class="form-item">
          <text class="label">城市</text>
          <picker class="picker" mode="region" :value="userInfo.fullLocation.split(' ')" @change="loaclChange">
            <view v-if="userInfo?.fullLocation">{{userInfo.fullLocation}}</view>
            <view class="placeholder" v-else>请选择城市</view>
          </picker>
        </view>
        <view class="form-item">
          <text class="label">职业</text>
          <input class="input" type="text" placeholder="请填写职业" v-model="userInfo.profession" />
        </view>
      </view>
      <!-- 提交按钮 -->
      <button class="form-button" @tap="updataUserInfo">保 存</button>
    </view>
  </view>
</template>

<style lang="scss">
page {
  background-color: #f4f4f4;
}

.viewport {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-image: url(https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/images/order_bg.png);
  background-size: auto 420rpx;
  background-repeat: no-repeat;
}

// 导航栏
.navbar {
  position: relative;

  .title {
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: 500;
    color: #fff;
  }

  .back {
    position: absolute;
    height: 40px;
    width: 40px;
    left: 0;
    font-size: 20px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

// 头像
.avatar {
  text-align: center;
  width: 100%;
  height: 260rpx;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .image {
    width: 160rpx;
    height: 160rpx;
    border-radius: 50%;
    background-color: #eee;
  }

  .text {
    display: block;
    padding-top: 20rpx;
    line-height: 1;
    font-size: 26rpx;
    color: #fff;
  }
}

// 表单
.form {
  background-color: #f4f4f4;

  &-content {
    margin: 20rpx 20rpx 0;
    padding: 0 20rpx;
    border-radius: 10rpx;
    background-color: #fff;
  }

  &-item {
    display: flex;
    height: 96rpx;
    line-height: 46rpx;
    padding: 25rpx 10rpx;
    background-color: #fff;
    font-size: 28rpx;
    border-bottom: 1rpx solid #ddd;

    &:last-child {
      border: none;
    }

    .label {
      width: 180rpx;
      color: #333;
    }

    .account {
      color: #666;
    }

    .input {
      flex: 1;
      display: block;
      height: 46rpx;
    }

    .radio {
      margin-right: 20rpx;
    }

    .picker {
      flex: 1;
    }
    .placeholder {
      color: #808080;
    }
  }

  &-button {
    height: 80rpx;
    text-align: center;
    line-height: 80rpx;
    margin: 30rpx 20rpx;
    color: #fff;
    border-radius: 80rpx;
    font-size: 30rpx;
    background-color: #27ba9b;
  }
}
</style>