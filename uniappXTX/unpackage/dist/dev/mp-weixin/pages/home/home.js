"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  CustomNavbar();
}
const CustomNavbar = () => "./components/CustomNavbar.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "home",
  setup(__props) {
    const res = common_vendor.index.getSystemInfoSync();
    console.log(res);
    return (_ctx, _cache) => {
      return {};
    };
  }
});
wx.createPage(_sfc_main);
