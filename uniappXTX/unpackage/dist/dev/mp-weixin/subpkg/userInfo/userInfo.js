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
    const tapAvatar = () => {
      common_vendor.index.chooseImage({
        count: 1,
        success: (res) => {
          console.log("选择成功", res);
          console.log("选择的图片路径", res.tempFilePaths[0]);
          common_vendor.index.uploadFile({
            url: "/member/profile/avatar",
            filePath: res.tempFilePaths[0],
            name: "file",
            success: (Tres) => {
              console.log("上传成功：", Tres);
              userInfo2.value.avatar = res.tempFilePaths[0];
            }
          });
        }
      });
    };
    return (_ctx, _cache) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
      return common_vendor.e({
        a: ((_a = common_vendor.unref(safeAreaInsets)) == null ? void 0 : _a.top) + "px",
        b: (_b = userInfo2.value) == null ? void 0 : _b.avatar,
        c: common_vendor.o(tapAvatar),
        d: common_vendor.t((_c = userInfo2.value) == null ? void 0 : _c.account),
        e: (_d = userInfo2.value) == null ? void 0 : _d.nickname,
        f: ((_e = userInfo2.value) == null ? void 0 : _e.gender) === "男",
        g: ((_f = userInfo2.value) == null ? void 0 : _f.gender) === "女",
        h: (_g = userInfo2.value) == null ? void 0 : _g.birthday
      }, ((_h = userInfo2.value) == null ? void 0 : _h.birthday) ? {
        i: common_vendor.t(userInfo2.value.birthday)
      } : {}, {
        j: /* @__PURE__ */ new Date(),
        k: userInfo2.value.birthday,
        l: (_i = userInfo2.value) == null ? void 0 : _i.fullLocation
      }, ((_j = userInfo2.value) == null ? void 0 : _j.fullLocation) ? {
        m: common_vendor.t(userInfo2.value.fullLocation)
      } : {}, {
        n: userInfo2.value.fullLocation.split(" "),
        o: userInfo2.value.profession
      });
    };
  }
});
wx.createPage(_sfc_main);
