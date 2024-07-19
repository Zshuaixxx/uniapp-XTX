"use strict";
const common_vendor = require("../../common/vendor.js");
const api_hot = require("../../api/hot.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "hot",
  props: {
    type: {}
  },
  setup(__props) {
    common_vendor.onLoad(() => {
      getHotData();
    });
    const hotMap = [
      { type: "1", title: "特惠推荐", url: "/hot/preference" },
      { type: "2", title: "爆款推荐", url: "/hot/inVogue" },
      { type: "3", title: "一站买全", url: "/hot/oneStop" },
      { type: "4", title: "新鲜好物", url: "/hot/new" }
    ];
    const query = __props;
    console.log("query:", query);
    const nowhot = hotMap.find((v) => v.type === query.type);
    console.log("nowhot:", nowhot);
    common_vendor.index.setNavigationBarTitle({
      title: nowhot.title
    });
    const pic = common_vendor.ref("");
    const subs = common_vendor.ref();
    const getHotData = async () => {
      const res = await api_hot.getHotDataService(nowhot.url);
      console.log("推荐页面获取数据接口返回res:", res);
      pic.value = res.result.bannerPicture;
      subs.value = res.result.subTypes;
    };
    const activeIndex = common_vendor.ref(0);
    const onLower = async () => {
      if (subs.value[activeIndex.value].goodsItems.page < subs.value[activeIndex.value].goodsItems.pages) {
        console.log(subs.value[activeIndex.value]);
        subs.value[activeIndex.value].goodsItems.page++;
        const res = await api_hot.getHotDataService(nowhot.url, {
          subType: subs.value[activeIndex.value].id,
          pageSize: subs.value[activeIndex.value].goodsItems.pageSize,
          page: subs.value[activeIndex.value].goodsItems.page
        });
        const newGoods = res.result.subTypes[activeIndex.value].goodsItems.items;
        subs.value[activeIndex.value].goodsItems.items.push(...newGoods);
      } else {
        subs.value[activeIndex.value].havemore = false;
        common_vendor.index.showToast({
          "title": "没有更多数据了",
          icon: "none"
        });
      }
    };
    return (_ctx, _cache) => {
      return {
        a: pic.value,
        b: common_vendor.f(subs.value, (subType2, index, i0) => {
          return {
            a: common_vendor.t(subType2.title),
            b: subType2.id,
            c: index === activeIndex.value ? 1 : "",
            d: common_vendor.o(($event) => activeIndex.value = index, subType2.id)
          };
        }),
        c: common_vendor.f(subs.value, (subType2, index, i0) => {
          return {
            a: common_vendor.f(subType2.goodsItems.items, (goods, k1, i1) => {
              return {
                a: goods.picture,
                b: common_vendor.t(goods.name),
                c: common_vendor.t(goods.price),
                d: goods.id,
                e: `/pages/goods/goods?id=${goods.id}`
              };
            }),
            b: common_vendor.t(subType2.havemore ? "正在加载..." : "人家也是有底线的"),
            c: subType2.id,
            d: index === activeIndex.value,
            e: common_vendor.o(($event) => onLower(), subType2.id)
          };
        })
      };
    };
  }
});
wx.createPage(_sfc_main);
