"use strict";
const common_vendor = require("../../common/vendor.js");
const api_home = require("../../api/home.js");
if (!Math) {
  XtxSwiper();
}
const XtxSwiper = () => "../../components/XtxSwiper.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "classify",
  setup(__props) {
    common_vendor.onLoad(() => {
      getSwiperData();
    });
    const swiperData = common_vendor.ref();
    const getSwiperData = async () => {
      const res = await api_home.getHomeBannerService(2);
      swiperData.value = res.result;
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(10, (item, index, i0) => {
          return {
            a: item,
            b: index === 0 ? 1 : ""
          };
        }),
        b: common_vendor.p({
          list: swiperData.value
        }),
        c: common_vendor.f(3, (item, k0, i0) => {
          return {
            a: common_vendor.f(4, (goods, k1, i1) => {
              return {
                a: goods
              };
            }),
            b: item
          };
        }),
        d: `/pages/goods/goods?id=`
      };
    };
  }
});
wx.createPage(_sfc_main);
