"use strict";
const common_vendor = require("../../common/vendor.js");
const api_address = require("../../api/address.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "address-form",
  props: {
    id: {}
  },
  setup(__props) {
    const form = common_vendor.ref({
      receiver: "",
      // 收货人
      contact: "",
      // 联系方式
      fullLocation: "",
      // 省市区(前端展示)
      provinceCode: "",
      // 省份编码(后端参数)
      cityCode: "",
      // 城市编码(后端参数)
      countyCode: "",
      // 区/县编码(后端参数)
      address: "",
      // 详细地址
      isDefault: 0
      // 默认地址，1为是，0为否
    });
    const query = __props;
    common_vendor.index.setNavigationBarTitle({
      title: query.id ? "修改地址" : "添加地址"
    });
    const newLocal = (e) => {
      console.log(e);
      form.value.fullLocation = e.detail.value.join(" ");
      form.value.provinceCode = e.detail.code[0];
      form.value.cityCode = e.detail.code[1];
      form.value.countyCode = e.detail.code[2];
    };
    const newDefault = (e) => {
      console.log(e);
      form.value.isDefault = e.detail.value ? 1 : 0;
    };
    const baocundizhi = async () => {
      if (query.id) {
        const res = api_address.updataAddressService(query.id, form.value);
        console.log("修改地址接口返回：", res);
      } else {
        const res = await api_address.addAddressService(form.value);
        console.log("新建地址接口返回：", res);
      }
      common_vendor.index.showToast({
        icon: "success",
        title: "保存成功"
      });
      setTimeout(() => {
        common_vendor.index.navigateBack();
      }, 300);
    };
    common_vendor.onLoad(() => {
      getAddressDetail();
    });
    const getAddressDetail = async () => {
      const res = await api_address.getAddressDetailService(query.id);
      form.value = res.result;
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: form.value.receiver,
        b: common_vendor.o(($event) => form.value.receiver = $event.detail.value),
        c: form.value.contact,
        d: common_vendor.o(($event) => form.value.contact = $event.detail.value),
        e: form.value.fullLocation
      }, form.value.fullLocation ? {
        f: common_vendor.t(form.value.fullLocation)
      } : {}, {
        g: form.value.fullLocation.split(" "),
        h: common_vendor.o(newLocal),
        i: form.value.address,
        j: common_vendor.o(($event) => form.value.address = $event.detail.value),
        k: form.value.isDefault === 1,
        l: common_vendor.o(newDefault),
        m: common_vendor.o(baocundizhi)
      });
    };
  }
});
wx.createPage(_sfc_main);
