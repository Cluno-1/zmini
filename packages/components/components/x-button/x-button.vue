<!--
 * @Author: 张连登 17875477802@163.com
 * @Date: 2025-04-25 10:55:05
 * @LastEditors: 张连登 17875477802@163.com
 * @LastEditTime: 2025-04-25 11:45:09
 * @FilePath: \xingye-wechat\components\x-button\x-button.vue
 * @Description: 
 * 
 * Copyright 2025 xingye/'zld', All Rights Reserved. 
-->
<template>
	<view>
		<button class="button" @click="onClick" :style="style" :size="size">
			<slot v-if="$slots.default"></slot>
			<text v-else>{{ name }}</text>
		</button>
	</view>
</template>


<script lang="ts">
	import { defineComponent, ref, watch, watchEffect } from "vue";
	import { buttonColor, buttonProps, buttonPropsType } from "./x-button.type";


	export default defineComponent({
		name: 'XButton',
		emits: ['onClick'],
		props: buttonProps,
		setup(props : buttonPropsType, { emit }) {
			function onClick() {
				emit('onClick');
			}
			const style=ref({})
			watchEffect(()=>{
				const { type, color, width,round } = props
				let background = '';
				let textColor='white'
				switch (type as unknown as buttonColor) {
					case 'default':
						background = 'linear-gradient(135deg, #235BF7 0%, #d55fc6 100%)';
						break;
					case 'warning':
						background = 'linear-gradient(135deg, #e9aa4d 0%, #f8e0be 100%)';
						break;
					case 'info':
						background = 'linear-gradient(135deg, #0b4590 0%,  #15afba 100%)';
						break;
					case 'plain':
						background = 'linear-gradient(135deg, #aaffff 0%,  #ffffff 100%)';
						textColor='black'
						break;
					default:
						break;
				}
				
				if (color && color.includes('linear-gradient')) {
					background = color
				}
				
				style.value = {
					width,
					background,
					color:textColor,
					borderRadius: round?'30px':'5px'
				}
			})
			


			return {

				onClick,
				style,
			}

		}
	})
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