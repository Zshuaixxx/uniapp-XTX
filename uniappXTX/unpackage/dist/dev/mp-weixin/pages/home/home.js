"use strict";
const common_vendor = require("../../common/vendor.js");
const api_home = require("../../api/home.js");
const hooks_useGuessList = require("../../hooks/useGuessList.js");
if (!Math) {
  (CustomNavbar + XtxSwiper + CategoryPnael + HotPanel + XtxGuess)();
}
const CustomNavbar = () => "./components/CustomNavbar.js";
const XtxSwiper = () => "../../components/XtxSwiper.js";
const CategoryPnael = () => "./components/CategoryPanel.js";
const HotPanel = () => "./components/HotPanel.js";
const XtxGuess = () => "../../components/XtxGuess.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "home",
  setup(__props) {
    common_vendor.onLoad(() => {
      getBannerList();
      getCategoryList();
      getHotList();
    });
    const BannerList = common_vendor.ref([]);
    const getBannerList = async () => {
      const res = await api_home.getHomeBannerService(1);
      console.log("首页轮播图接口返回：", res);
      BannerList.value = res.result;
    };
    const CategoryList = common_vendor.ref([]);
    const getCategoryList = async () => {
      const res = await api_home.getHomeCategoryMmutliService();
      console.log("首页分类接口返回：", res);
      CategoryList.value = res.result;
    };
    const HotList = common_vendor.ref([]);
    const getHotList = async () => {
      const res = await api_home.getHomeHotMutliService();
      console.log("首页获取热门推荐数据接口返回:", res);
      HotList.value = res.result;
    };
    const {
      guessRef,
      lowFresh
    } = hooks_useGuessList.useGuessList();
    const isPull = common_vendor.ref(false);
    const PullFresh = async () => {
      var _a;
      isPull.value = true;
      guessRef.value.resetData();
      Promise.all([getBannerList(), getCategoryList(), getHotList(), (_a = guessRef.value) == null ? void 0 : _a.getGuessList(guessRef.value.Homepage, guessRef.value.HomepageSize)]);
      isPull.value = false;
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          list: BannerList.value
        }),
        b: common_vendor.p({
          list: CategoryList.value
        }),
        c: common_vendor.p({
          list: HotList.value
        }),
        d: common_vendor.sr(guessRef, "432f47ff-4", {
          "k": "guessRef"
        }),
        e: common_vendor.o(($event) => common_vendor.unref(lowFresh)()),
        f: common_vendor.o(($event) => PullFresh()),
        g: isPull.value
      };
    };
  }
});
wx.createPage(_sfc_main);
