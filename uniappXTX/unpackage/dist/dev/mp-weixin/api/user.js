"use strict";
const utils_http = require("../utils/http.js");
const getMemberProfileService = () => {
  return utils_http.http({
    url: "/member/profile",
    method: "GET"
  });
};
exports.getMemberProfileService = getMemberProfileService;
