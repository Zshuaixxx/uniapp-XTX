"use strict";
const utils_http = require("../utils/http.js");
const postLoginWxMinService = (loginParam2) => {
  return utils_http.http({
    method: "POST",
    url: "/login/wxMin",
    data: loginParam2
  });
};
const postLoginWxMInSimpleService = (phoneNumber) => {
  return utils_http.http({
    method: "POST",
    url: "/login/wxMin/simple",
    data: {
      phoneNumber
    }
  });
};
exports.postLoginWxMInSimpleService = postLoginWxMInSimpleService;
exports.postLoginWxMinService = postLoginWxMinService;
