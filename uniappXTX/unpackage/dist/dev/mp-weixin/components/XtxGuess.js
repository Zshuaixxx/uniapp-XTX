"use strict";
const common_vendor = require("../common/vendor.js");
const api_home = require("../api/home.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "XtxGuess",
  setup(__props) {
    common_vendor.onMounted(() => {
      getGuessList();
    });
    const Homepage = common_vendor.ref(1);
    const HomepageSize = common_vendor.ref(10);
    const GuessList = common_vendor.ref();
    const getGuessList = async (page = Homepage.value, pageSize = HomepageSize.value) => {
      const res = await api_home.getHomeGoodsGuessLikeService(page, pageSize);
      console.log("首页获取猜你喜欢数据接口返回：", res);
      GuessList.value = res.result;
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(GuessList.value.items, (item, k0, i0) => {
          return {
            a: item.picture,
            b: common_vendor.t(item.name),
            c: common_vendor.t(item.price),
            d: item.id
          };
        }),
        b: `/pages/goods/goods?id={{item.id}}`
      };
    };
  }
});
wx.createComponent(_sfc_main);
