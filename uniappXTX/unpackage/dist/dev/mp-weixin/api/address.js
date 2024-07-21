"use strict";
const utils_http = require("../utils/http.js");
const addAddressService = (data) => {
  return utils_http.http({
    method: "POST",
    url: "/member/address",
    data
  });
};
const getAddressListService = () => {
  return utils_http.http({
    method: "GET",
    url: "/member/address"
  });
};
exports.addAddressService = addAddressService;
exports.getAddressListService = getAddressListService;
