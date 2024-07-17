"use strict";
const common_vendor = require("../../common/vendor.js");
require("../../stores/index.js");
require("../../utils/http.js");
const stores_modules_member = require("../../stores/modules/member.js");
if (!Array) {
  const _easycom_uni_steps2 = common_vendor.resolveComponent("uni-steps");
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  const _component_template = common_vendor.resolveComponent("template");
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  (_easycom_uni_steps2 + _easycom_uni_section2 + _component_template + _easycom_uni_card2)();
}
const _easycom_uni_steps = () => "../../uni_modules/uni-steps/components/uni-steps/uni-steps.js";
const _easycom_uni_section = () => "../../uni_modules/uni-section/components/uni-section/uni-section.js";
const _easycom_uni_card = () => "../../uni_modules/uni-card/components/uni-card/uni-card.js";
if (!Math) {
  (_easycom_uni_steps + _easycom_uni_section + _easycom_uni_card)();
}
const _sfc_main = {
  __name: "home",
  setup(__props) {
    const memberStore = stores_modules_member.useMemberStore();
    const re = () => {
      console.log("发送请求");
      common_vendor.index.request({
        method: "GET",
        url: "/home/goods/guessLike"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          options: _ctx.list1,
          active: _ctx.active
        }),
        b: common_vendor.p({
          title: "基本用法",
          type: "line",
          padding: true
        }),
        c: common_vendor.p({
          options: _ctx.list1,
          ["active-icon"]: "checkbox",
          active: _ctx.active
        }),
        d: common_vendor.p({
          title: "自定义图标",
          type: "line",
          padding: true
        }),
        e: common_vendor.p({
          options: _ctx.list1,
          ["active-icon"]: "medal",
          active: _ctx.active
        }),
        f: common_vendor.p({
          title: "自定义图标",
          type: "line",
          padding: true
        }),
        g: common_vendor.p({
          options: _ctx.list2,
          ["active-color"]: "#007AFF",
          active: _ctx.active,
          direction: "column"
        }),
        h: common_vendor.p({
          title: "纵向排列",
          type: "line",
          padding: true
        }),
        i: common_vendor.o((...args) => _ctx.change && _ctx.change(...args)),
        j: common_vendor.p({
          title: "基础用法",
          ["sub-title"]: "副标题"
        }),
        k: common_vendor.p({
          title: "竖线装饰",
          ["sub-title"]: "副标题",
          type: "line"
        }),
        l: common_vendor.p({
          title: "装饰器插槽",
          ["sub-title"]: "副标题"
        }),
        m: common_vendor.p({
          title: "默认插槽",
          ["sub-title"]: "副标题"
        }),
        n: common_vendor.p({
          title: "主标题"
        }),
        o: common_vendor.p({
          title: "基础卡片",
          ["sub-title"]: "副标题",
          extra: "额外信息",
          thumbnail: "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png"
        }),
        p: common_vendor.t(common_vendor.unref(memberStore).profile.nikename),
        q: common_vendor.o(($event) => common_vendor.unref(memberStore).setProfile({
          nikename: "左祥祥",
          token: "20050502"
        })),
        r: common_vendor.o(($event) => common_vendor.unref(memberStore).clearProfile()),
        s: common_vendor.o(($event) => re())
      };
    };
  }
};
wx.createPage(_sfc_main);
