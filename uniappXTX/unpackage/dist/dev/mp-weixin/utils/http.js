"use strict";
const common_vendor = require("../common/vendor.js");
require("../stores/index.js");
const stores_modules_user = require("../stores/modules/user.js");
const baseURL = "https://pcapi-xiaotuxian-front-devtest.itheima.net";
const Interceptor = {
  invoke(options) {
    var _a;
    if (!options.url.startsWith("http")) {
      options.url = baseURL + options.url;
    }
    options.timeout = 1e4;
    options.header = {
      ...options.header,
      "source-client": "miniapp"
    };
    const MemberStore = stores_modules_user.useUserStore();
    const token = (_a = MemberStore.profile) == null ? void 0 : _a.token;
    if (token) {
      options.header.Authorization = token;
    }
  }
};
common_vendor.index.addInterceptor("request", Interceptor);
common_vendor.index.addInterceptor("uploadFile", Interceptor);
const memberStore = stores_modules_user.useUserStore();
const http = (options) => {
  return new Promise((resolve, reject) => {
    common_vendor.index.request({
      ...options,
      success(res) {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(res.data);
        } else if (res.statusCode === 401) {
          memberStore.clearProfile();
          common_vendor.index.showToast({
            icon: "none",
            text: "请先登录"
          });
          common_vendor.index.navigateTo({
            url: "/pages/login/login"
          });
          reject(res);
        } else {
          common_vendor.index.showToast({
            icon: "none",
            text: res.data.msg || "请求失败"
          });
        }
      },
      fail(err) {
        common_vendor.index.showToast({
          icon: "none",
          text: "网络错误"
        });
        reject(err);
      }
    });
  });
};
exports.http = http;
