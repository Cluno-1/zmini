<template>
	<view class="small-title">
		<image :src="`${preImgUrl}/global/small-title/small-tip.png`" />
		<text>{{ title }}</text>
		<slot name="right-icon"></slot>
	</view>
</template>

<script setup>
	import { preImgUrl } from '../../utils/img';
const props = defineProps({
	title: {
		type: String,
		default: ''
	}
});
</script>

<style lang="scss" scoped>
.small-title {
	display: flex;
	align-items: center;
	font-size: 28rpx;
	margin-bottom: 32rpx;

	image {
		max-height: 20rpx;
		max-width: 32rpx;
		margin-right: 16rpx;
	}
}
</style>
