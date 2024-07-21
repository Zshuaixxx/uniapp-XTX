"use strict";
const common_vendor = require("../../common/vendor.js");
const api_address = require("../../api/address.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "address",
  setup(__props) {
    common_vendor.onShow(() => {
      getAddressList();
    });
    const addressList = common_vendor.ref([]);
    const getAddressList = async () => {
      const res = await api_address.getAddressListService();
      addressList.value = res.result;
      console.log("收货地址列表：", addressList.value);
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: addressList.value.length > 0
      }, addressList.value.length > 0 ? {
        b: common_vendor.f(addressList.value, (item, k0, i0) => {
          return common_vendor.e({
            a: common_vendor.t(item.receiver),
            b: common_vendor.t(item.receiver),
            c: item.isDefault
          }, item.isDefault ? {} : {}, {
            d: common_vendor.t(item.fullLocation),
            e: common_vendor.t(item.address),
            f: `/subpkg/address-form/address-form?id=${item.id}`
          });
        })
      } : {});
    };
  }
});
wx.createPage(_sfc_main);
