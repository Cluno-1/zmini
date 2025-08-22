"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "ZButton",
  props: {
    name: {
      type: String,
      //按钮文本
      default: ""
    },
    width: {
      type: String,
      //宽度
      default: "100%"
    },
    type: {
      type: String,
      //按钮预设的背景颜色 "default" | "warning" | "info" | "plain" | "purple" | "blue" | "green" | "orange" | "pink" | "red" | "light-green" | "white" | "black"
      default: "default"
    },
    bgColor: {
      type: String,
      //自定义背景颜色
      default: ""
    },
    color: {
      type: String,
      //自定义文本颜色
      default: ""
    },
    size: {
      type: String,
      //按钮大小(高度) "default" | "mini"
      default: "default"
    },
    round: {
      type: Boolean,
      //是否圆角  默认是
      default: true
    },
    loading: {
      type: Boolean,
      //是否加载中  默认否
      default: false
    }
  },
  emits: common_vendor.baseEmits,
  setup(__props, { expose: __expose, emit: __emit }) {
    __expose({
      name: "ZButton"
    });
    const props = __props;
    const emit = __emit;
    const background = common_vendor.ref("");
    const textColor = common_vendor.ref("black");
    const activeColor = common_vendor.ref("");
    const plain = common_vendor.ref(false);
    common_vendor.onMounted(() => {
      setColor();
    });
    function setColor() {
      const { type, color, bgColor, loading } = props;
      background.value = "";
      textColor.value = "";
      activeColor.value = "";
      plain.value = false;
      if (bgColor) {
        background.value = bgColor;
        textColor.value = loading ? common_vendor.textColor[2] : color || common_vendor.getContrastTextColor(bgColor);
        activeColor.value = common_vendor.getDarkerActiveColor(bgColor);
        return;
      }
      if (type === "plain") {
        plain.value = true;
      }
      let _t2 = type;
      if (!type) {
        _t2 = "default";
      }
      let _item = common_vendor._ButtonTypeMap.get(_t2);
      if (_item) {
        background.value = _item.bgColor;
        textColor.value = loading ? common_vendor.textColor[2] : color || _item.textColor;
        activeColor.value = _item.activeColor;
      }
    }
    common_vendor.watch(() => props.bgColor, setColor);
    common_vendor.watch(() => props.color, setColor);
    common_vendor.watch(() => props.type, setColor);
    common_vendor.watch(() => props.loading, setColor);
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: _ctx.$slots.default
      }, _ctx.$slots.default ? {} : {
        b: common_vendor.t(__props.name)
      }, {
        c: common_vendor.o(($event) => common_vendor.unref(common_vendor.emitClick)(emit, $event)),
        d: plain.value,
        e: __props.size,
        f: __props.loading,
        g: __props.width,
        h: background.value,
        i: textColor.value,
        j: __props.round ? "30rpx" : "5rpx",
        k: __props.width
      });
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e656bee6"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/node-modules/@zmini/components/ZButton/ZButton.js.map
