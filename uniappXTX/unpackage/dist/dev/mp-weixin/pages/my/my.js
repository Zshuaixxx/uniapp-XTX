"use strict";
const common_vendor = require("../../common/vendor.js");
require("../../stores/index.js");
const hooks_useGuessList = require("../../hooks/useGuessList.js");
const stores_modules_user = require("../../stores/modules/user.js");
if (!Math) {
  XtxGuess();
}
const XtxGuess = () => "../../components/XtxGuess.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "my",
  setup(__props) {
    const { safeAreaInsets } = common_vendor.index.getSystemInfoSync();
    const orderTypes = [
      { type: 1, text: "待付款", icon: "icon-currency" },
      { type: 2, text: "待发货", icon: "icon-gift" },
      { type: 3, text: "待收货", icon: "icon-check" },
      { type: 4, text: "待评价", icon: "icon-comment" }
    ];
    const UserStore = stores_modules_user.useUserStore();
    const userInfo = UserStore.profile;
    let hadLogin = false;
    if (userInfo.token) {
      hadLogin = true;
      console.log("已登录");
    }
    const {
      guessRef,
      lowFresh
    } = hooks_useGuessList.useGuessList();
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(hadLogin)
      }, common_vendor.unref(hadLogin) ? {
        b: common_vendor.unref(userInfo).avatar,
        c: common_vendor.t(common_vendor.unref(userInfo).nikename || common_vendor.unref(userInfo).id)
      } : {}, {
        d: common_vendor.unref(safeAreaInsets).top + "px",
        e: common_vendor.f(orderTypes, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.text),
            b: item.type,
            c: common_vendor.n(item.icon),
            d: `/pagesOrder/list/list?type=${item.type}`
          };
        }),
        f: common_vendor.sr(guessRef, "d7df7e42-0", {
          "k": "guessRef"
        }),
        g: common_vendor.o(
          //@ts-ignore
          (...args) => common_vendor.unref(lowFresh) && common_vendor.unref(lowFresh)(...args)
        )
      });
    };
  }
});
wx.createPage(_sfc_main);
