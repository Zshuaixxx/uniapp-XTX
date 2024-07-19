"use strict";
const common_vendor = require("../../common/vendor.js");
const api_home = require("../../api/home.js");
const api_classify = require("../../api/classify.js");
if (!Math) {
  XtxSwiper();
}
const XtxSwiper = () => "../../components/XtxSwiper.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "classify",
  setup(__props) {
    common_vendor.onLoad(() => {
      getSwiperData();
      getCategoryData();
    });
    const swiperData = common_vendor.ref();
    const getSwiperData = async () => {
      const res = await api_home.getHomeBannerService(2);
      swiperData.value = res.result;
    };
    const activeIndex = common_vendor.ref(0);
    const categoryData = common_vendor.ref();
    const getCategoryData = async () => {
      const res = await api_classify.getCategoryTopService();
      categoryData.value = res.result;
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(categoryData.value, (oneC, index, i0) => {
          return {
            a: common_vendor.t(oneC.name),
            b: oneC.id,
            c: index === activeIndex.value ? 1 : "",
            d: common_vendor.o(($event) => activeIndex.value = index, oneC.id)
          };
        }),
        b: common_vendor.p({
          list: swiperData.value
        }),
        c: common_vendor.f(categoryData.value[activeIndex.value].children, (twoC, k0, i0) => {
          return {
            a: common_vendor.t(twoC.name),
            b: common_vendor.f(twoC.goods, (goods, k1, i1) => {
              return {
                a: goods.picture,
                b: common_vendor.t(goods.name),
                c: common_vendor.t(goods.price),
                d: goods.id,
                e: `/pages/goods/goods?id=${goods.id}`
              };
            }),
            c: twoC.id
          };
        })
      };
    };
  }
});
wx.createPage(_sfc_main);
