"use strict";
const utils_http = require("../utils/http.js");
const addAddressService = (data) => {
  return utils_http.http({
    method: "POST",
    url: "/member/address",
    data
  });
};
exports.addAddressService = addAddressService;
