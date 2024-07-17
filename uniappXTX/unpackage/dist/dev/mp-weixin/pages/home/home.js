"use strict";
const common_vendor = require("../../common/vendor.js");
require("../../stores/index.js");
const utils_http = require("../../utils/http.js");
const stores_modules_member = require("../../stores/modules/member.js");
if (!Array) {
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  const _component_template = common_vendor.resolveComponent("template");
  (_easycom_uni_section2 + _easycom_uni_card2 + _component_template)();
}
const _easycom_uni_section = () => "../../uni_modules/uni-section/components/uni-section/uni-section.js";
const _easycom_uni_card = () => "../../uni_modules/uni-card/components/uni-card/uni-card.js";
if (!Math) {
  (_easycom_uni_section + _easycom_uni_card)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "home",
  setup(__props) {
    const memberStore = stores_modules_member.useMemberStore();
    const re = async () => {
      console.log("发送请求");
      const res = await utils_http.http({
        method: "GET",
        url: "/category/top"
      });
      console.log("返回", res);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "基础用法",
          ["sub-title"]: "副标题"
        }),
        b: common_vendor.p({
          title: "竖线装饰",
          ["sub-title"]: "副标题",
          type: "line"
        }),
        c: common_vendor.p({
          title: "装饰器插槽",
          ["sub-title"]: "副标题"
        }),
        d: common_vendor.p({
          title: "默认插槽",
          ["sub-title"]: "副标题"
        }),
        e: common_vendor.p({
          title: "主标题"
        }),
        f: common_vendor.p({
          title: "基础卡片",
          ["sub-title"]: "副标题",
          extra: "额外信息",
          thumbnail: "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png"
        }),
        g: common_vendor.t(common_vendor.unref(memberStore).profile.nikename),
        h: common_vendor.o(($event) => common_vendor.unref(memberStore).setProfile({
          nikename: "左祥祥",
          token: "20050502"
        })),
        i: common_vendor.o(($event) => common_vendor.unref(memberStore).clearProfile()),
        j: common_vendor.o(($event) => re())
      };
    };
  }
});
wx.createPage(_sfc_main);
