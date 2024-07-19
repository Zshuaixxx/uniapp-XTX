"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "ServicePanel",
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => emit("close"))
      };
    };
  }
});
wx.createComponent(_sfc_main);
