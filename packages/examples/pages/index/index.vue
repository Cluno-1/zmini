<template>
	<view class="layout" :style="{'paddingTop':'40px'}">
		<u-collapse :accordion="false" :value="uColVal">
			<drawer-item title="组件演示">
				<view class="nav">
					<view class="item" v-for="(item, index) in data" :key="index" @click="handle(item)">
						<view class="picture item">
							{{ item.name }}
						</view>
						<text class="text">
							{{ item.title }}
						</text>
					</view>
				</view>
			</drawer-item>
		</u-collapse>
	</view>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const uColVal = ref('');

function handle(item) {
	uni.navigateTo({
		url: item.router
	});
}

const data = [
	{
		title: '按钮',
		name: 'ZButton',
		router: '/pages/button/index'
	},
	{
		title: '输入框',
		name: 'ZInput',
		router: '/pages/input/index'
	},
	{
		title: '表单',
		name: 'ZListCard',
		router: '/pages/list-card/index'
	},
];
</script>

<style  lang="scss" scoped>

.nav {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-column-gap: 50rpx;
	grid-row-gap: 20rpx;
	.item {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: 20rpx;
	}
	.picture {
		width: 100rpx;
		height: 100rpx;
		border-radius: 20rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: blueviolet;
	}

	.text {
		font-size: 30rpx;
		font-weight: bold;
	}
}
</style>
