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
	<view class="statistical-data">
		<view class="left">
			<image :src="leftImage" mode="" />
			<view class="item" v-for="(item, index) in leftData" :key="index">
				<view class="label">{{ item.title }}</view>
				<view class="value">
					{{ item.value }}
					<text class="unit">{{ item.unit }}</text>
				</view>
			</view>
		</view>
		<view class="right">
			<image :src="rightImage" mode="" />
			<view class="item" v-for="(item, index) in rightData" :key="index">
				<view class="label">{{ item.title }}</view>
				<view class="value">
					{{ item.value }}
					<text class="unit">{{ item.unit }}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup lang="ts">
import { Props } from './x-show-card';
import { preImgUrl } from '../../utils/img';



const props = withDefaults(defineProps<Props>(), {
	leftImage:  `${preImgUrl}/workbench/left1.png`,
	rightImage: `${preImgUrl}/workbench/right1.png`
});
</script>

<style scoped lang="scss">
.statistical-data {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 44rpx;

	.unit {
		font-size: 20rpx;
		margin-left: 5rpx;
	}

	.left,
	.right {
		width: 48%;
		color: #fff;
		position: relative;
		padding: 48rpx 32rpx;
		border-radius: 30rpx;

		.item {
			display: flex;
			flex-direction: column;
			margin-bottom: 32rpx;

			&:last-child {
				margin-bottom: 0;
			}

			.label {
				font-size: 30rpx;
				margin-bottom: 24rpx;
			}

			.value {
				font-size: 32rpx;
				font-weight: bold;
			}
		}

		image {
			width: 100%;
			height: 100%;
			border-radius: 30rpx;
			z-index: -1;
			position: absolute;
			left: 0;
			top: 0;
			object-fit: cover;
		}
	}
}
</style>
