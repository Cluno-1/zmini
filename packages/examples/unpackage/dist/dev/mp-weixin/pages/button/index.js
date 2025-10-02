"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_ZButton2 = common_vendor.resolveComponent("ZButton");
  const _easycom_ZInput2 = common_vendor.resolveComponent("ZInput");
  const _easycom_ZSwitch2 = common_vendor.resolveComponent("ZSwitch");
  const _easycom_u_form_item2 = common_vendor.resolveComponent("u-form-item");
  const _easycom_u_form2 = common_vendor.resolveComponent("u-form");
  const _easycom_ZListCard2 = common_vendor.resolveComponent("ZListCard");
  (_easycom_ZButton2 + _easycom_ZInput2 + _easycom_ZSwitch2 + _easycom_u_form_item2 + _easycom_u_form2 + _easycom_ZListCard2)();
}
const _easycom_ZButton = () => "../../node-modules/@zmini/components/ZButton/ZButton.js";
const _easycom_ZInput = () => "../../node-modules/@zmini/components/ZInput/ZInput.js";
const _easycom_ZSwitch = () => "../../node-modules/@zmini/components/ZSwitch/ZSwitch.js";
const _easycom_u_form_item = () => "../../node-modules/uview-plus/components/u-form-item/u-form-item.js";
const _easycom_u_form = () => "../../node-modules/uview-plus/components/u-form/u-form.js";
const _easycom_ZListCard = () => "../../node-modules/@zmini/components/ZListCard/ZListCard.js";
if (!Math) {
  (_easycom_ZButton + _easycom_ZInput + _easycom_ZSwitch + _easycom_u_form_item + _easycom_u_form + _easycom_ZListCard)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const _ = common_vendor.reactive({
      name: "确认",
      loading: false,
      type: "info",
      bgColor: "",
      width: "30vw",
      color: "",
      size: "default",
      round: false,
      borderRadious: "15px"
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          name: _.name,
          loading: _.loading,
          type: _.type,
          bgColor: _.bgColor,
          color: _.color,
          borderRadious: _.borderRadious,
          round: _.round,
          width: _.width,
          size: _.size
        }),
        b: common_vendor.o(($event) => _.name = $event),
        c: common_vendor.p({
          label: "name 文本:",
          bottomLine: true,
          modelValue: _.name
        }),
        d: common_vendor.o(($event) => _.type = $event),
        e: common_vendor.p({
          label: "type 预设颜色:",
          bottomLine: true,
          modelValue: _.type
        }),
        f: common_vendor.o(($event) => _.width = $event),
        g: common_vendor.p({
          label: "width 宽度(带单位):",
          bottomLine: true,
          modelValue: _.width
        }),
        h: common_vendor.o(($event) => _.bgColor = $event),
        i: common_vendor.p({
          label: "bgColor 背景颜色:",
          bottomLine: true,
          modelValue: _.bgColor
        }),
        j: common_vendor.o(($event) => _.color = $event),
        k: common_vendor.p({
          label: "color 文本颜色:",
          bottomLine: true,
          modelValue: _.color
        }),
        l: common_vendor.o(($event) => _.size = $event),
        m: common_vendor.p({
          label: "size 大小:",
          bottomLine: true,
          modelValue: _.size
        }),
        n: common_vendor.o(($event) => _.loading = $event),
        o: common_vendor.p({
          useTernary: false,
          modelValue: _.loading
        }),
        p: common_vendor.p({
          label: "loading 是否加载:",
          useTernary: "false",
          labelWidth: "100",
          borderBottom: true
        }),
        q: common_vendor.o(($event) => _.round = $event),
        r: common_vendor.p({
          useTernary: false,
          modelValue: _.round
        }),
        s: common_vendor.p({
          label: "round 是否圆角:",
          useTernary: "false",
          labelWidth: "100",
          borderBottom: true
        }),
        t: common_vendor.o(($event) => _.borderRadious = $event),
        v: common_vendor.p({
          label: "圆角值",
          bottomLine: true,
          modelValue: _.borderRadious
        })
      };
    };
  }
});
wx.createPage(_sfc_main);
