<!--
 * @Author: 张连登 17875477802@163.com
 * @import { checkMessageType } from './index.type';
Date: 2025-04-29 13:52:42
 * @LastEditors: 张连登 17875477802@163.com
 * @LastEditTime: 2025-05-07 14:16:27
 * @FilePath: \xingye-wechat\subpackage-1\laboratory\sample\testing-management\components\check-message\index.vue
 * @Description: 
 * 
 * Copyright 2025 xingye/'zld', All Rights Reserved. 
-->

<template>
	<view>
		<u-popup :show="show" mode="top" :round="10" @close="onClose" mask-click-close safeAreaInsetTop closeable safeAreaInsetBottom  :customStyle="{ maxHeight: '94vh', overflow: 'auto' }"  >
			<view class="padding-14">
			<x-list-card class="popupCenter">
				<template #title>
					{{ title }}
				</template>

				<template v-if="$slots.default">
					<slot name="default"></slot>
				</template>

				<template v-else>
					<x-form-input v-for="(item,index) in (data as checkMessageType[])" :label="item.label" v-model="item.value" disabled :key="index"></x-form-input>
				</template>
			</x-list-card>
			</view>
		</u-popup>
	</view>
</template>

<script lang="ts">
import { defineComponent, ref, PropType, watch, reactive, computed } from 'vue';
import { checkProps, checkPropsType, checkMessageType } from './index.type';

export default defineComponent({
	name: 'XCheckMessage',
	emits: ['onClose'],
	props: checkProps,
	setup(props: checkPropsType, { emit }) {
		function onClose() {
			emit('onClose');
		}

		return {
			onClose
		};
	}
});
</script>

<style scoped lang="scss">
	.padding-14{
		padding: 10rpx 14rpx;
	}
</style>
