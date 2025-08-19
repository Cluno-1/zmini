<!--
 * @Author: 张连登 17875477802@163.com
 * @Date: 2025-04-25 10:55:05
 * @LastEditors: zld 17875477802@163.com
 * @LastEditTime: 2025-08-19 17:36:56
 * @FilePath: \zmini\packages\components\ZButton\ZButton.vue
 * @Description: 
 * 
 * Copyright 2025 xingye/'zld', All Rights Reserved. 
-->
<template>
	<view>
		<button class="button" @click="onClick" :style="{
			width,
			background,
			color: textColor,
			borderRadius: round ? '30px' : '5px'
		}" :size="size">
			<slot v-if="$slots.default"></slot>
			<text v-else>{{ name }}</text>
		</button>
	</view>
</template>


<script lang="ts" setup>
import { ref, watch, onMounted } from "vue";
import type { PropType } from 'vue'
import type { buttonColor } from ".";

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
	type: {
		type: String as PropType<buttonColor>,
		default: 'default'
	},
	color: {
		type: String,
		default: ''
	},
	size: {
		type: String as PropType<'default' | 'mini'>,
		default: 'default'
	},
	round: {//是否圆角
		type: Boolean,
		default: true
	}


})

const emit = defineEmits(['onClick'])

const background = ref('');
const textColor = ref('white')


onMounted(() => {
	setColor()
})

function setColor() {
	const { type, color } = props
	switch (type) {
		case 'default':
			background.value = 'linear-gradient(135deg, #235BF7 0%, #d55fc6 100%)';
			textColor.value = 'white'
			break;
		case 'warning':
			background.value = 'linear-gradient(135deg, #e9aa4d 0%, #f8e0be 100%)';
			textColor.value = 'white'
			break;
		case 'info':
			background.value = 'linear-gradient(135deg, #0b4590 0%,  #15afba 100%)';
			textColor.value = 'white'
			break;
		case 'plain':
			background.value = 'linear-gradient(135deg, #aaffff 0%,  #ffffff 100%)';
			textColor.value = 'black'
			break;
		default:
			break;
	}

	if (color) {
		background.value = color,
			textColor.value = 'black'
	}
}

function onClick() {
	emit('onClick');
}

watch(props,setColor)

</script>

<style scoped lang="scss">
.button {
	width: 100%;
	height: auto;
	padding: 4rpx 0;
	border-radius: 30px;
	color: #fff;
	font-size: 28rpx;
	margin-bottom: 28rpx;
}
</style>