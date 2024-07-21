"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "address",
  setup(__props) {
    return (_ctx, _cache) => {
      return common_vendor.e({}, {
        a: `/subpkg/address-form/address-form?id=1`
      }, {}, {
        b: `/subpkg/address-form/address-form?id=2`
      });
    };
  }
});
wx.createPage(_sfc_main);
