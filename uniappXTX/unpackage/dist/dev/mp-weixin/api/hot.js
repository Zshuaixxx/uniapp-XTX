"use strict";
const utils_http = require("../utils/http.js");
const getHotDataService = (url, Hotparams) => {
  return utils_http.http({
    url,
    method: "GET",
    data: Hotparams
  });
};
exports.getHotDataService = getHotDataService;
