"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "XtxSwiper",
  setup(__props) {
    const activeIndex = common_vendor.ref(0);
    const onChange = (e) => {
      activeIndex.value = e.detail.current;
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(onChange),
        b: common_vendor.f(3, (item, index, i0) => {
          return {
            a: item,
            b: index === activeIndex.value ? 1 : ""
          };
        })
      };
    };
  }
});
wx.createComponent(_sfc_main);
