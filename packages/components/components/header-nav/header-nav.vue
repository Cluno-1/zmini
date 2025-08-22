<template>
	<view class="title" :style="{paddingTop: statusBarHeight + 'px'}">{{ title }}</view>
</template>
<script setup>
	import {
		onLoad
	} from '@dcloudio/uni-app';
	import {
		ref
	} from 'vue'
	const props = defineProps({
		title: {
			type: String,
			default: ''
		}
	});
	const statusBarHeight = ref()
	onLoad(() => {
		statusBarHeight.value = uni.getSystemInfoSync()['statusBarHeight']
	})
</script>

<style lang="scss" scoped>
	.title {
		height: 90px;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #fff;
		font-size: 34rpx;
	}
</style>