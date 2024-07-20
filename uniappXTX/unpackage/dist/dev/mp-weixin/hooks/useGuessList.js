"use strict";
const common_vendor = require("../common/vendor.js");
const useGuessList = () => {
  const guessRef = common_vendor.ref();
  const lowFresh = () => {
    var _a;
    console.log("触底了");
    guessRef.value.Homepage++;
    (_a = guessRef.value) == null ? void 0 : _a.getGuessList(guessRef.value.Homepage, guessRef.value.HomepageSize);
  };
  return {
    guessRef,
    lowFresh
  };
};
exports.useGuessList = useGuessList;
