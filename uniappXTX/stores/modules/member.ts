import { defineStore } from 'pinia'
import { ref } from 'vue'

// 定义 Store
export const useMemberStore = defineStore(
  'member',
  () => {
    // 会员信息
    const profile = ref<any>({
		nikename:'youke'
	})

    // 保存会员信息，登录时使用
    const setProfile = (val: any) => {
	  console.log('开始添加:'+val)
      profile.value = val
    }

    // 清理会员信息，退出时使用
    const clearProfile = () => {
	  console.log('删除')
      profile.value = {
		  nikename:'youke'
	  }
    }

    // 记得 return
    return {
      profile,
      setProfile,
      clearProfile,
    }
  },
  {
      // 配置持久化
      persist: {
        // 调整为兼容多端的API
        storage: {
          setItem(key, value) {
            uni.setStorageSync(key, value) // [!code warning]
          },
          getItem(key) {
            return uni.getStorageSync(key) // [!code warning]
          },
        },
      },
    },
)