"use strict";
const utils_http = require("../utils/http.js");
const getGoodsDetailService = (id) => {
  return utils_http.http({
    url: "/goods",
    method: "GET",
    data: {
      id
    }
  });
};
exports.getGoodsDetailService = getGoodsDetailService;
