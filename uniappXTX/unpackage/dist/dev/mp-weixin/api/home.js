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
const getHomeHotMutliService = () => {
  return utils_http.http({
    method: "GET",
    url: "/home/hot/mutli"
  });
};
const getHomeGoodsGuessLikeService = (page = 1, pageSize = 10) => {
  return utils_http.http({
    method: "GET",
    url: "/home/goods/guessLike",
    data: {
      page,
      pageSize
    }
  });
};
exports.getHomeBannerService = getHomeBannerService;
exports.getHomeCategoryMmutliService = getHomeCategoryMmutliService;
exports.getHomeGoodsGuessLikeService = getHomeGoodsGuessLikeService;
exports.getHomeHotMutliService = getHomeHotMutliService;
