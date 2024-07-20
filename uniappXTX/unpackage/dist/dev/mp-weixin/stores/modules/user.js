"use strict";
const common_vendor = require("../../common/vendor.js");
const useUserStore = common_vendor.defineStore(
  "user",
  () => {
    const profile = common_vendor.ref();
    const setProfile = (val) => {
      console.log("开始添加:", val);
      profile.value = val;
    };
    const clearProfile = () => {
      console.log("删除");
      profile.value = null;
    };
    return {
      profile,
      setProfile,
      clearProfile
    };
  },
  {
    // 配置持久化
    persist: {
      // 调整为兼容多端的API
      storage: {
        setItem(key, value) {
          common_vendor.index.setStorageSync(key, value);
        },
        getItem(key) {
          return common_vendor.index.getStorageSync(key);
        }
      }
    }
  }
);
exports.useUserStore = useUserStore;
