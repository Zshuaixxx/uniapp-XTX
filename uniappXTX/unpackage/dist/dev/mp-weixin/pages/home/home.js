"use strict";
const common_vendor = require("../../common/vendor.js");
const api_home = require("../../api/home.js");
if (!Math) {
  (CustomNavbar + XtxSwiper)();
}
const CustomNavbar = () => "./components/CustomNavbar.js";
const XtxSwiper = () => "../../components/XtxSwiper.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "home",
  setup(__props) {
    common_vendor.onLoad(() => {
      getBannerList();
    });
    const BannerList = common_vendor.ref([]);
    const getBannerList = async () => {
      const res = await api_home.getHomeBannerService(1);
      console.log("首页轮播图接口返回：", res);
      BannerList.value = res.result;
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          list: BannerList.value
        })
      };
    };
  }
});
wx.createPage(_sfc_main);
