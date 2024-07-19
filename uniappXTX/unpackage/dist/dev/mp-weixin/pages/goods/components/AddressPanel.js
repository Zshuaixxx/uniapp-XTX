"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "AddressPanel",
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(($event) => emit("close"))
      }, {});
    };
  }
});
wx.createComponent(_sfc_main);
