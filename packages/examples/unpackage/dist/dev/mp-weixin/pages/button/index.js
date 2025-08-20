"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_ZButton2 = common_vendor.resolveComponent("ZButton");
  _easycom_ZButton2();
}
const _easycom_ZButton = () => "../../node-modules/@zmini/components/ZButton/ZButton.js";
if (!Math) {
  _easycom_ZButton();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_vendor.p({
      name: "正确"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/button/index.js.map
