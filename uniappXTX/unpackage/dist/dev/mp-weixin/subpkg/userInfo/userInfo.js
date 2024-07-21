"use strict";
const common_vendor = require("../../common/vendor.js");
const api_user = require("../../api/user.js");
require("../../stores/index.js");
const stores_modules_user = require("../../stores/modules/user.js");
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
    const userStore = stores_modules_user.useUserStore();
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
              userStore.profile.avatar = res.tempFilePaths[0];
              common_vendor.index.navigateBack();
            }
          });
        }
      });
    };
    let localNum = null;
    const updataUserInfo = async () => {
      if (localNum === null) {
        const res = await api_user.updataUserInfoService({
          gender: userInfo2.value.gender,
          nickname: userInfo2.value.nickname,
          profession: userInfo2.value.profession,
          birthday: userInfo2.value.birthday
        });
        console.log("修改用户信息接口返回：", res);
      } else {
        const res = await api_user.updataUserInfoService({
          gender: userInfo2.value.gender,
          nickname: userInfo2.value.nickname,
          profession: userInfo2.value.profession,
          birthday: userInfo2.value.birthday,
          provinceCode: localNum[0],
          cityCode: localNum[1],
          countyCode: localNum[2]
        });
        console.log("修改用户信息接口返回：", res);
      }
      userStore.profile.nikename = userInfo2.value.nickname;
      common_vendor.index.navigateBack();
    };
    const sexChange = (e) => {
      console.log("选择性别：", e.detail.value);
      userInfo2.value.gender = e.detail.value;
    };
    const birChangw = (e) => {
      console.log("选择生日：", e);
      userInfo2.value.birthday = e.detail.value;
    };
    const loaclChange = (e) => {
      console.log("选择地区：", e);
      userInfo2.value.fullLocation = e.detail.value.join(" ");
      localNum = e.detail.code;
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
        i: common_vendor.o(sexChange),
        j: (_f = userInfo2.value) == null ? void 0 : _f.birthday
      }, ((_g = userInfo2.value) == null ? void 0 : _g.birthday) ? {
        k: common_vendor.t(userInfo2.value.birthday)
      } : {}, {
        l: /* @__PURE__ */ new Date(),
        m: userInfo2.value.birthday,
        n: common_vendor.o(birChangw),
        o: (_h = userInfo2.value) == null ? void 0 : _h.fullLocation
      }, ((_i = userInfo2.value) == null ? void 0 : _i.fullLocation) ? {
        p: common_vendor.t(userInfo2.value.fullLocation)
      } : {}, {
        q: userInfo2.value.fullLocation.split(" "),
        r: common_vendor.o(loaclChange),
        s: userInfo2.value.profession,
        t: common_vendor.o(($event) => userInfo2.value.profession = $event.detail.value),
        v: common_vendor.o(updataUserInfo)
      });
    };
  }
});
wx.createPage(_sfc_main);
