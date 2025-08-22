<!--
 * @Author: 张连登 17875477802@163.com
 * @Date: 2025-04-28 11:54:43
 * @LastEditors: 张连登 17875477802@163.com
 * @LastEditTime: 2025-04-28 12:49:23
 * @FilePath: \xingye-wechat\components\x-tag\x-tag.vue
 * @Description: 
 * 
 * Copyright 2025 xingye/'zld', All Rights Reserved. 
-->
<template>
	<view class="switch">
		
		<view class="item" >
			<view v-show="value!==''&&value!==null&&!value">
				<slot name='leftText'></slot>
				<slot name='inactiveText' ></slot>
				<text>{{inactiveText}}</text>
			</view>
			<view class="item" v-show="value===''||value===null">
				<text >置空</text>
			</view>
			
		</view>
		
		<view class="item" @click="value===''?$emit('onUse'):null">
			<u-switch :activeColor='activeColor' :inactiveColor='inactiveColor' :disabled="disabled||value===''"
				:model-value="Boolean(value)" :size="size"
				@update:model-value="$emit('onChange', $event)"></u-switch>
		</view>
		<view class="item">
			<view v-show="value!==''&&value!==null&&value">
				<text >{{activeText}}</text>
				<slot name='activeText'></slot>
				<slot name='rightText'></slot>
			</view>
			
		</view>
		
		<view v-show="value!==''&&value!==null" @click="$emit('onUnuse')">
			<up-icon name="backspace"></up-icon>
		</view>

	</view>
</template>
<script lang="ts">
	import { defineComponent, reactive, ref,watch } from "vue"
	import { switchProps, switchPropsType } from "./x-switch.type";

	export default defineComponent({
		name: 'XSwitch',
		emit: ['onChange', 'onUse','onUnuse'],
		props: switchProps
	})
</script>

<style scoped lang="scss">
	.switch {
		display: flex;
		flex-direction: row;
		gap: 5rpx;
		justify-content: flex-start;
	}

	.item {
		min-width: 100rpx;
		transition: opacity 0.3s ease;
		flex-shrink: 0
	}
</style>