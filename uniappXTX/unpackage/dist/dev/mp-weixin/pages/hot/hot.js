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
    const getHotData = async () => {
      const res = await api_hot.getHotDataService(nowhot.url);
      console.log("推荐页面获取数据接口返回res:", res);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(10, (goods, k0, i0) => {
          return {
            a: goods
          };
        }),
        b: `/pages/goods/goods?id=`
      };
    };
  }
});
wx.createPage(_sfc_main);
