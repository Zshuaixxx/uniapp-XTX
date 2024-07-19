"use strict";
const common_vendor = require("../../common/vendor.js");
const api_goodsDetail = require("../../api/goodsDetail.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "goods",
  props: {
    id: String
  },
  setup(__props) {
    const { safeAreaInsets } = common_vendor.index.getSystemInfoSync();
    common_vendor.onLoad(() => {
      getGoodsDetail();
    });
    const query = __props;
    const goodsDetail = common_vendor.ref();
    const getGoodsDetail = async () => {
      const res = await api_goodsDetail.getGoodsDetailService(query.id);
      goodsDetail.value = res.result;
    };
    const nowpic = common_vendor.ref(1);
    const onchange = (e) => {
      nowpic.value = e.detail.current + 1;
    };
    const tapPic = (url) => {
      common_vendor.index.previewImage({
        urls: goodsDetail.value.mainPictures,
        url
      });
    };
    return (_ctx, _cache) => {
      var _a, _b, _c;
      return {
        a: common_vendor.f((_a = goodsDetail.value) == null ? void 0 : _a.mainPictures, (item, k0, i0) => {
          return {
            a: item,
            b: common_vendor.o(($event) => tapPic(item), item),
            c: item
          };
        }),
        b: common_vendor.o(onchange),
        c: common_vendor.t(nowpic.value),
        d: common_vendor.t((_b = goodsDetail.value) == null ? void 0 : _b.mainPictures.length),
        e: common_vendor.t(goodsDetail.value.price),
        f: common_vendor.t(goodsDetail.value.name),
        g: common_vendor.t(goodsDetail.value.desc),
        h: common_vendor.f(goodsDetail.value.details.properties, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: common_vendor.t(item.value),
            c: item.name
          };
        }),
        i: common_vendor.f(goodsDetail.value.details.pictures, (item, k0, i0) => {
          return {
            a: item,
            b: item
          };
        }),
        j: common_vendor.f(goodsDetail.value.similarProducts, (item, k0, i0) => {
          return {
            a: item.picture,
            b: common_vendor.t(item.name),
            c: common_vendor.t(item.price),
            d: item.id,
            e: `/pages/goods/goods?id=${item.id}`
          };
        }),
        k: ((_c = common_vendor.unref(safeAreaInsets)) == null ? void 0 : _c.bottom) + "px"
      };
    };
  }
});
wx.createPage(_sfc_main);
