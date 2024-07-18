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
const getHomeCategoryMmutliService = () => {
  return utils_http.http({
    method: "GET",
    url: "/home/category/mutli"
  });
};
exports.getHomeBannerService = getHomeBannerService;
exports.getHomeCategoryMmutliService = getHomeCategoryMmutliService;
