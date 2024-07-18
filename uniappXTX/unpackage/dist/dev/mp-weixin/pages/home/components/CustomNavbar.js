"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_assets = require("../../../common/assets.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "CustomNavbar",
  setup(__props) {
    const { safeAreaInsets } = common_vendor.index.getSystemInfoSync();
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0,
        b: common_vendor.unref(safeAreaInsets).top + "px"
      };
    };
  }
});
wx.createComponent(_sfc_main);
