"use strict";
const utils_http = require("../utils/http.js");
const getHomeBannerService = (distributionSite = 1) => {
  return utils_http.http({
    method: "GET",
    url: "/home/banner",
    data: {
      distributionSite
    }
  });
};
exports.getHomeBannerService = getHomeBannerService;
