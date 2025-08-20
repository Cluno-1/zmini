<!--
 * @Author: 张连登 17875477802@163.com
 * @Date: 2025-04-25 10:55:05
 * @LastEditors: zld 17875477802@163.com
 * @LastEditTime: 2025-08-20 17:12:27
 * @FilePath: \zmini\packages\components\ZButton\ZButton.vue
 * @Description: 
 * 
 * Copyright 2025 xingye/'zld', All Rights Reserved. 
-->
<template>
	<view>
		<button class="button" @click="emitClick(emit,$event)" :plain="plain" :size="size" :loading="loading" :style="{
			width,
			background,
			color: textColor,
			borderRadius: round ? '30px' : '5px'
		}">
			<slot v-if="$slots.default"></slot>
			<text v-else>{{ name }}</text>
		</button>
	</view>
</template>


<script lang="ts" setup>
import { ref, watch, onMounted } from "vue";
import type { PropType } from 'vue'
import { _ButtonTypeMap, type ButtonSize, type ButtonType } from "@zmini/theme";
import { baseEmits, emitClick, getContrastTextColor, getDarkerActiveColor } from "@zmini/utils";

defineExpose({
	name: "ZButton",
});

const props = defineProps({
	name: {
		type: String,
		default: ''
	},
	width: {
		type: String,
		default: '100%'
	},
	type: {//预设的颜色
		type: String as PropType<ButtonType>,
		default: 'default'
	},
	bgColor: {//按钮背景颜色
		type: String,
		default: ''
	},
	color: {//文本颜色
		type: String,
		default: ''
	},
	size: {
		type: String as PropType<ButtonSize>,
		default: 'default'
	},
	round: {//是否圆角
		type: Boolean,
		default: true
	},
	loading: {// 是否加载
		type: Boolean,
		default: false
	}


})

const emit = defineEmits(baseEmits)

const background = ref('');
const textColor = ref('black')
const activeColor = ref('')
const plain =ref(false)


onMounted(() => {
	setColor()
})


function setColor() {
	const { type, color, bgColor } = props
	background.value = ''
	textColor.value = ''
	activeColor.value=''
	plain.value=false
	
	if(bgColor){
		background.value = bgColor
		textColor.value = color|| getContrastTextColor(bgColor)
		activeColor.value = getDarkerActiveColor(bgColor)
		return
	}
	if(type==='plain'){
		plain.value=true
	}
	let _t=type
	if(type){
		_t = 'default'
	}
	let _item = _ButtonTypeMap.get(_t)
	if (_item) {
		background.value = _item.bgColor
		textColor.value = color||_item.textColor
		activeColor.value=_item.activeColor
	}
}

watch(() => props.bgColor, setColor)
watch(() => props.color, setColor)
watch(() => props.type, setColor)

</script>

<style scoped lang="scss">
.button {
	width: 100%;
	height: auto;
	padding: 4rpx 14rpx;
	border-radius: 5px;
	color: black;
	margin-bottom: 28rpx;
}
</style>