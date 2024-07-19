"use strict";
const common_vendor = require("../../common/vendor.js");
const api_goodsDetail = require("../../api/goodsDetail.js");
if (!Array) {
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  _easycom_uni_popup2();
}
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (AddressPanel + ServicePanel + _easycom_uni_popup)();
}
const AddressPanel = () => "./components/AddressPanel.js";
const ServicePanel = () => "./components/ServicePanel.js";
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
    const whcicProp = common_vendor.ref("dizhi");
    const popup = common_vendor.ref();
    const openPopup = (what) => {
      popup.value.open("bottom");
      whcicProp.value = what;
    };
    const closePop = () => {
      console.log("自吊缚成功");
      popup.value.close();
    };
    return (_ctx, _cache) => {
      var _a, _b, _c;
      return common_vendor.e({
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
        h: common_vendor.o(($event) => openPopup("dizhi")),
        i: common_vendor.o(($event) => openPopup("fuwu")),
        j: common_vendor.f(goodsDetail.value.details.properties, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: common_vendor.t(item.value),
            c: item.name
          };
        }),
        k: common_vendor.f(goodsDetail.value.details.pictures, (item, k0, i0) => {
          return {
            a: item,
            b: item
          };
        }),
        l: common_vendor.f(goodsDetail.value.similarProducts, (item, k0, i0) => {
          return {
            a: item.picture,
            b: common_vendor.t(item.name),
            c: common_vendor.t(item.price),
            d: item.id,
            e: `/pages/goods/goods?id=${item.id}`
          };
        }),
        m: ((_c = common_vendor.unref(safeAreaInsets)) == null ? void 0 : _c.bottom) + "px",
        n: whcicProp.value === "dizhi"
      }, whcicProp.value === "dizhi" ? {
        o: common_vendor.o(closePop)
      } : {}, {
        p: whcicProp.value === "fuwu"
      }, whcicProp.value === "fuwu" ? {
        q: common_vendor.o(closePop)
      } : {}, {
        r: common_vendor.sr(popup, "72d4324d-0", {
          "k": "popup"
        }),
        s: common_vendor.p({
          type: "bottom",
          ["border-radius"]: "10px 10px 0 0"
        })
      });
    };
  }
});
wx.createPage(_sfc_main);
