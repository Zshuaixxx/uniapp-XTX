"use strict";
const utils_http = require("../utils/http.js");
const getMemberProfileService = () => {
  return utils_http.http({
    url: "/member/profile",
    method: "GET"
  });
};
const updataUserInfoService = (Params) => {
  return utils_http.http({
    url: "/member/profile",
    method: "PUT",
    data: Params
  });
};
exports.getMemberProfileService = getMemberProfileService;
exports.updataUserInfoService = updataUserInfoService;
