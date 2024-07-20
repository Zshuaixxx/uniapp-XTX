"use strict";
const common_vendor = require("../../common/vendor.js");
require("../../stores/index.js");
const stores_modules_user = require("../../stores/modules/user.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "setting",
  setup(__props) {
    const userStore = stores_modules_user.useUserStore();
    const outLogin = () => {
      common_vendor.index.showModal({
        content: "确实退出登录吗？",
        success: (res) => {
          if (res.confirm) {
            userStore.clearProfile();
            common_vendor.index.navigateBack();
          }
        }
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(userStore).profile
      }, common_vendor.unref(userStore).profile ? {} : {}, {
        b: common_vendor.unref(userStore).profile
      }, common_vendor.unref(userStore).profile ? {
        c: common_vendor.o(outLogin)
      } : {});
    };
  }
});
wx.createPage(_sfc_main);
