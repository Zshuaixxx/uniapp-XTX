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
const updataAddressService = (id, data) => {
  return utils_http.http({
    method: "PUT",
    url: `/member/address/${id}`,
    data
  });
};
const getAddressDetailService = (id) => {
  return utils_http.http({
    method: "GET",
    url: `/member/address/${id}`
  });
};
const deleteAddressService = (id) => {
  return utils_http.http({
    method: "DELETE",
    url: `/member/address/${id}`
  });
};
exports.addAddressService = addAddressService;
exports.deleteAddressService = deleteAddressService;
exports.getAddressDetailService = getAddressDetailService;
exports.getAddressListService = getAddressListService;
exports.updataAddressService = updataAddressService;
