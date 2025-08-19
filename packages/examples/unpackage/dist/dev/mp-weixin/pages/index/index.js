"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_ZButton2 = common_vendor.resolveComponent("ZButton");
  _easycom_ZButton2();
}
const _easycom_ZButton = () => "../../node-modules/@zmini/components/ZButton/ZButton.js";
if (!Math) {
  _easycom_ZButton();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    function handle() {
      common_vendor.index.__f__("log", "at pages/index/index.vue:9", "con on click!!");
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(handle),
        b: common_vendor.p({
          name: "组件"
        })
      };
    };
  }
});
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
