"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
const stores_index = require("./stores/index.js");
if (!Math) {
  "./pages/home/home.js";
  "./pages/classify/classify.js";
  "./pages/cart/cart.js";
  "./pages/my/my.js";
  "./pages/login/login.js";
  "./pages/hot/hot.js";
  "./pages/goods/goods.js";
  "./subpkg/setting/setting.js";
  "./subpkg/userInfo/userInfo.js";
  "./subpkg/address/address.js";
  "./subpkg/address-form/address-form.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.warn("当前组件仅支持 uni_modules 目录结构 ，请升级 HBuilderX 到 3.1.0 版本以上！");
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
function createApp() {
  const app = common_vendor.createSSRApp(_sfc_main);
  app.use(stores_index.pinia);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
