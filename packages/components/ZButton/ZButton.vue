<template>
	<view :style="{ width }">
		<button class=" zbutton" @click="emitClick(emit, $event)" :plain="plain" :size="size" :loading="loading" :style="{
			width,
			background,
			color: textColor,
			borderRadius: round ? borderRadious : '0px'
		}">
			<text style="margin-left: 20rpx;">
				<slot v-if="$slots.default"></slot>
				<text v-else>{{ name }}</text>
			</text>
		</button>
	</view>

</template>


<script lang="ts" setup>
import { ref, watch, onMounted, type PropType } from "vue";
import { _ButtonTypeMap, type ButtonSize, type ButtonType, textColor as tColor } from "@zmini/theme";
import { baseEmits, emitClick, getContrastTextColor, getDarkerActiveColor } from "@zmini/utils";
defineExpose({
	name: "ZButton",
});


const props = defineProps({
	name: {
		type: String,//按钮文本 说明: name字段 > 默认插槽
		default: ''
	},
	width: {
		type: String,//宽度
		default: '100%'
	},
	type: {
		type: String as PropType<ButtonType>,//按钮预设的背景颜色 "default" | "warning" | "info" | "plain" | "purple" | "blue" | "green" | "orange" | "pink" | "red" | "light-green" | "white" | "black"
		default: 'default'
	},
	bgColor: {
		type: String,//自定义背景颜色  说明: bgColor字段 > type字段
		default: ''
	},
	color: {
		type: String,//自定义文本颜色
		default: ''
	},
	size: {
		type: String as PropType<ButtonSize>,//按钮大小(高度) "default" | "mini"
		default: 'default'
	},
	round: {
		type: Boolean,//是否圆角  默认是
		default: true
	},
	borderRadious: {
		type: String,//自定义圆角半径 默认15rpx
		default: '15px'
	},
	loading: {
		type: Boolean,//是否加载中  默认否
		default: false
	}
});
const emit = defineEmits(baseEmits)

const background = ref('');
const textColor = ref('black')
const activeColor = ref('')
const plain = ref(false)


onMounted(() => {
	setColor()
})


function setColor() {
	const { type, color, bgColor, loading } = props
	background.value = ''
	textColor.value = ''
	activeColor.value = ''
	plain.value = false

	if (bgColor) {
		background.value = bgColor
		textColor.value = loading ? tColor[2] : color || getContrastTextColor(bgColor)
		activeColor.value = getDarkerActiveColor(bgColor)
		return
	}
	if (type === 'plain') {
		plain.value = true
	}
	let _t = type
	if (!type) {
		_t = 'default'
	}
	let _item = _ButtonTypeMap.get(_t)
	if (_item) {
		background.value = _item.bgColor
		textColor.value = loading ? tColor[2] : color || _item.textColor
		activeColor.value = _item.activeColor
	}
}

watch(() => props.bgColor, setColor)
watch(() => props.color, setColor)
watch(() => props.type, setColor)
watch(() => props.loading, setColor)

</script>

<style scoped lang="scss">
.zbutton {
	border-radius: 5rpx;
	color: black;
}
</style>