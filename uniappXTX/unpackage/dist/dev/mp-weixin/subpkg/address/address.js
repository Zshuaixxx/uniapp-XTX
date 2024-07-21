"use strict";
const common_vendor = require("../../common/vendor.js");
const api_address = require("../../api/address.js");
if (!Array) {
  const _component_buttom = common_vendor.resolveComponent("buttom");
  const _easycom_uni_swipe_action_item2 = common_vendor.resolveComponent("uni-swipe-action-item");
  const _easycom_uni_swipe_action2 = common_vendor.resolveComponent("uni-swipe-action");
  (_component_buttom + _easycom_uni_swipe_action_item2 + _easycom_uni_swipe_action2)();
}
const _easycom_uni_swipe_action_item = () => "../../uni_modules/uni-swipe-action/components/uni-swipe-action-item/uni-swipe-action-item.js";
const _easycom_uni_swipe_action = () => "../../uni_modules/uni-swipe-action/components/uni-swipe-action/uni-swipe-action.js";
if (!Math) {
  (_easycom_uni_swipe_action_item + _easycom_uni_swipe_action)();
}
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
    const deleteAddress = (id) => {
      common_vendor.index.showModal({
        content: "请确认删除",
        success: async (res) => {
          if (res.confirm) {
            const res2 = await api_address.deleteAddressService(id);
            console.log("删除收货地址接口返回", res2);
            getAddressList();
          }
        }
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: addressList.value.length > 0
      }, addressList.value.length > 0 ? {
        b: common_vendor.f(addressList.value, (item, k0, i0) => {
          return common_vendor.e({
            a: common_vendor.t(item.receiver),
            b: common_vendor.t(item.contact),
            c: item.isDefault
          }, item.isDefault ? {} : {}, {
            d: common_vendor.t(item.fullLocation),
            e: common_vendor.t(item.address),
            f: `/subpkg/address-form/address-form?id=${item.id}`,
            g: common_vendor.o(($event) => deleteAddress(item.id)),
            h: "989fe2aa-2-" + i0 + "," + ("989fe2aa-1-" + i0),
            i: "989fe2aa-1-" + i0 + ",989fe2aa-0"
          });
        })
      } : {});
    };
  }
});
wx.createPage(_sfc_main);
