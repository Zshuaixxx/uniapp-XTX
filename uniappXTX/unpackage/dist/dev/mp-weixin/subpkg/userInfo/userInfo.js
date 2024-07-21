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
    const userInfo2 = common_vendor.ref({});
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
    const updataUserInfo = async () => {
      const res = await api_user.updataUserInfoService({
        ...userInfo2.value
      });
      console.log("修改用户信息接口返回：", res);
    };
    return (_ctx, _cache) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i;
      return common_vendor.e({
        a: ((_a = common_vendor.unref(safeAreaInsets)) == null ? void 0 : _a.top) + "px",
        b: (_b = userInfo2.value) == null ? void 0 : _b.avatar,
        c: common_vendor.o(tapAvatar),
        d: common_vendor.t((_c = userInfo2.value) == null ? void 0 : _c.account),
        e: userInfo2.value.nickname,
        f: common_vendor.o(($event) => userInfo2.value.nickname = $event.detail.value),
        g: ((_d = userInfo2.value) == null ? void 0 : _d.gender) === "男",
        h: ((_e = userInfo2.value) == null ? void 0 : _e.gender) === "女",
        i: (_f = userInfo2.value) == null ? void 0 : _f.birthday
      }, ((_g = userInfo2.value) == null ? void 0 : _g.birthday) ? {
        j: common_vendor.t(userInfo2.value.birthday)
      } : {}, {
        k: /* @__PURE__ */ new Date(),
        l: userInfo2.value.birthday,
        m: (_h = userInfo2.value) == null ? void 0 : _h.fullLocation
      }, ((_i = userInfo2.value) == null ? void 0 : _i.fullLocation) ? {
        n: common_vendor.t(userInfo2.value.fullLocation)
      } : {}, {
        o: userInfo2.value.fullLocation.split(" "),
        p: userInfo2.value.profession,
        q: common_vendor.o(updataUserInfo)
      });
    };
  }
});
wx.createPage(_sfc_main);
