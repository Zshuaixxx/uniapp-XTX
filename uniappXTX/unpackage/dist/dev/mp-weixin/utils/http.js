"use strict";
const common_vendor = require("../common/vendor.js");
require("../stores/index.js");
const stores_modules_member = require("../stores/modules/member.js");
const baseURL = "https://pcapi-xiaotuxian-front-devtest.itheima.net";
const Interceptor = {
  invoke(options) {
    var _a;
    console.log("拦截器", options);
    if (!options.url.startsWith("http")) {
      options.url = baseURL + options.url;
      console.log("添加请求路径完成", options.url);
    }
    options.timeout = 1e4;
    options.header = {
      ...options.header,
      "source-client": "miniapp"
    };
    const MemberStore = stores_modules_member.useMemberStore();
    const token = (_a = MemberStore.profile) == null ? void 0 : _a.token;
    if (token) {
      options.header.Authorization = token;
    }
    console.log(options);
  }
};
common_vendor.index.addInterceptor("request", Interceptor);
common_vendor.index.addInterceptor("uploadFile", Interceptor);
