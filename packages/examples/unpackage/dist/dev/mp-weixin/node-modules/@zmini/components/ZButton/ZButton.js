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
      //预设的颜色
      type: String,
      default: "default"
    },
    bgColor: {
      //按钮背景颜色
      type: String,
      default: ""
    },
    color: {
      //文本颜色
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
    },
    loading: {
      // 是否加载
      type: Boolean,
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
      const { type, color, bgColor } = props;
      background.value = "";
      textColor.value = "";
      activeColor.value = "";
      plain.value = false;
      if (bgColor) {
        background.value = bgColor;
        textColor.value = color || common_vendor.getContrastTextColor(bgColor);
        activeColor.value = common_vendor.getDarkerActiveColor(bgColor);
        return;
      }
      if (type === "plain") {
        plain.value = true;
      }
      let _t2 = type;
      if (type) {
        _t2 = "default";
      }
      let _item = common_vendor._ButtonTypeMap.get(_t2);
      if (_item) {
        background.value = _item.bgColor;
        textColor.value = color || _item.textColor;
        activeColor.value = _item.activeColor;
      }
    }
    common_vendor.watch(() => props.bgColor, setColor);
    common_vendor.watch(() => props.color, setColor);
    common_vendor.watch(() => props.type, setColor);
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
        j: __props.round ? "30px" : "5px"
      });
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e656bee6"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/node-modules/@zmini/components/ZButton/ZButton.js.map
