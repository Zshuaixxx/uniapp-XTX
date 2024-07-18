"use strict";
const common_vendor = require("../common/vendor.js");
const api_home = require("../api/home.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "XtxGuess",
  setup(__props, { expose: __expose }) {
    common_vendor.onMounted(() => {
      getGuessList();
    });
    const finsh = common_vendor.ref(false);
    const Homepage = common_vendor.ref(1);
    const HomepageSize = common_vendor.ref(10);
    const GuessList = common_vendor.ref({
      counts: 10,
      pageSize: 10,
      pages: 1,
      page: 34,
      items: []
    });
    const getGuessList = async (page = Homepage.value, pageSize = HomepageSize.value) => {
      if (finsh.value) {
        return common_vendor.index.showToast({
          title: "没有更多数据了",
          icon: "none"
        });
      }
      const res = await api_home.getHomeGoodsGuessLikeService(page, pageSize);
      console.log("首页获取猜你喜欢数据接口返回：", res);
      if (res.result.items.length === 0) {
        finsh.value = true;
        common_vendor.index.showToast({
          title: "没有更多数据了",
          icon: "none"
        });
      } else {
        GuessList.value.items.push(...res.result.items);
        console.log("猜你喜欢数组赋值后：", GuessList.value.items);
      }
    };
    const resetData = () => {
      Homepage.value = 1;
      HomepageSize.value = 10;
      finsh.value = false;
      GuessList.value.items = [];
    };
    __expose({
      getGuessList,
      Homepage,
      HomepageSize,
      resetData
    });
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
        b: `/pages/goods/goods?id={{item.id}}`,
        c: common_vendor.t(finsh.value ? "人家也是有底线的" : "正在加载... ")
      };
    };
  }
});
wx.createComponent(_sfc_main);
