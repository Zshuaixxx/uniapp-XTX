"use strict";
const utils_http = require("../utils/http.js");
const getCategoryTopService = () => {
  return utils_http.http({
    method: "GET",
    url: "/category/top"
  });
};
exports.getCategoryTopService = getCategoryTopService;
