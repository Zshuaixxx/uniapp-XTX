"use strict";
const common_vendor = require("../../common/vendor.js");
const api_login = require("../../api/login.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "login",
  setup(__props) {
    common_vendor.onLoad(() => {
      getcode();
    });
    let code = "";
    const getcode = async () => {
      const res = await common_vendor.wx$1.login();
      code = res.code;
      console.log("进入页面请求的code：", code);
    };
    const GetPhoneNumber = async (e) => {
      console.log("e", e);
      const encryptedData = e.detail.encryptedData;
      const iv = e.detail.iv;
      const res = await api_login.postLoginWxMinService({
        code,
        encryptedData,
        iv
      });
      console.log("登录接口返回：", res);
    };
    const onSimpleLogin = async () => {
      const res = await api_login.postLoginWxMInSimpleService("15072139851");
      console.log("模拟登录接口返回：", res);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(GetPhoneNumber),
        b: common_vendor.o(onSimpleLogin)
      };
    };
  }
});
wx.createPage(_sfc_main);
