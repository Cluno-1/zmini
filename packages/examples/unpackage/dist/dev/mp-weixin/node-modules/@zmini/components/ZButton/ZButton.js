"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "ZButton",
  props: {
    name: {
      type: String,
      default: ""
    },
    width: {
      type: String,
      default: "100%"
    },
    type: {
      type: String,
      default: "default"
    },
    color: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: "default"
    },
    round: {
      //是否圆角
      type: Boolean,
      default: true
    }
  },
  emits: ["onClick"],
  setup(__props, { expose: __expose, emit: __emit }) {
    __expose({
      name: "ZButton"
    });
    const props = __props;
    const emit = __emit;
    const background = common_vendor.ref("");
    const textColor = common_vendor.ref("white");
    common_vendor.onMounted(() => {
      setColor();
    });
    function setColor() {
      const { type, color } = props;
      switch (type) {
        case "default":
          background.value = "linear-gradient(135deg, #235BF7 0%, #d55fc6 100%)";
          textColor.value = "white";
          break;
        case "warning":
          background.value = "linear-gradient(135deg, #e9aa4d 0%, #f8e0be 100%)";
          textColor.value = "white";
          break;
        case "info":
          background.value = "linear-gradient(135deg, #0b4590 0%,  #15afba 100%)";
          textColor.value = "white";
          break;
        case "plain":
          background.value = "linear-gradient(135deg, #aaffff 0%,  #ffffff 100%)";
          textColor.value = "black";
          break;
      }
      if (color) {
        background.value = color, textColor.value = "black";
      }
    }
    function onClick() {
      emit("onClick");
    }
    common_vendor.watch(props, setColor);
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: _ctx.$slots.default
      }, _ctx.$slots.default ? {} : {
        b: common_vendor.t(__props.name)
      }, {
        c: common_vendor.o(onClick),
        d: __props.width,
        e: background.value,
        f: textColor.value,
        g: __props.round ? "30px" : "5px",
        h: __props.size
      });
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e656bee6"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/node-modules/@zmini/components/ZButton/ZButton.js.map
