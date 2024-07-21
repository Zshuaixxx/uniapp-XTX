"use strict";
const common_vendor = require("../../common/vendor.js");
const api_user = require("../../api/user.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "userInfo",
  setup(__props) {
    const { safeAreaInsets } = common_vendor.index.getSystemInfoSync();
    common_vendor.onLoad(() => {
      getMemberProfile();
    });
    const userInfo2 = common_vendor.ref();
    const getMemberProfile = async () => {
      const res = await api_user.getMemberProfileService();
      console.log("获取用户信息接口返回", res);
      userInfo2.value = res.result;
    };
    return (_ctx, _cache) => {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      return common_vendor.e({
        a: ((_a = common_vendor.unref(safeAreaInsets)) == null ? void 0 : _a.top) + "px",
        b: (_b = userInfo2.value) == null ? void 0 : _b.avatar,
        c: common_vendor.t((_c = userInfo2.value) == null ? void 0 : _c.account),
        d: (_d = userInfo2.value) == null ? void 0 : _d.nickname,
        e: userInfo2.value.gender === "男",
        f: userInfo2.value.gender === "女",
        g: (_e = userInfo2.value) == null ? void 0 : _e.birthday
      }, ((_f = userInfo2.value) == null ? void 0 : _f.birthday) ? {
        h: common_vendor.t(userInfo2.value.birthday)
      } : {}, {
        i: /* @__PURE__ */ new Date(),
        j: userInfo2.value.birthday,
        k: (_g = userInfo2.value) == null ? void 0 : _g.fullLocation
      }, ((_h = userInfo2.value) == null ? void 0 : _h.fullLocation) ? {
        l: common_vendor.t(userInfo2.value.fullLocation)
      } : {}, {
        m: userInfo2.value.fullLocation.split(" "),
        n: userInfo2.value.profession
      });
    };
  }
});
wx.createPage(_sfc_main);
