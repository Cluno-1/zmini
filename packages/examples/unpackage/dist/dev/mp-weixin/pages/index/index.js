"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _component_drawer_item = common_vendor.resolveComponent("drawer-item");
  const _easycom_u_collapse2 = common_vendor.resolveComponent("u-collapse");
  (_component_drawer_item + _easycom_u_collapse2)();
}
const _easycom_u_collapse = () => "../../node-modules/uview-plus/components/u-collapse/u-collapse.js";
if (!Math) {
  _easycom_u_collapse();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const uColVal = common_vendor.ref("");
    function handle(item) {
      common_vendor.index.navigateTo({
        url: item.router
      });
    }
    const data = [
      {
        title: "按钮",
        name: "ZButton",
        router: "/pages/button/index"
      }
    ];
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(data, (item, index, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: common_vendor.t(item.title),
            c: index,
            d: common_vendor.o(($event) => handle(item), index)
          };
        }),
        b: common_vendor.p({
          title: "组件演示"
        }),
        c: common_vendor.p({
          accordion: false,
          value: uColVal.value
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"]]);
wx.createPage(MiniProgramPage);
