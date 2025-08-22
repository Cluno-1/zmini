<!--
 * @Author: 张连登 17875477802@163.com
 * @Date: 2025-04-26 15:52:37
 * @LastEditors: 张连登 17875477802@163.com
 * @LastEditTime: 2025-04-27 09:51:26
 * @FilePath: \xingye-wechat\components\x-list-card\x-list-card.vue
 * @Description: 
 * 
 * Copyright 2025 xingye/'zld', All Rights Reserved. 
-->
<template>
	<scroll-view scroll-y class="card-border card-border2" @click.stop="$emit('onClick',$event)" :style="{backgroundColor:bgColor}">
		<up-form labelPosition="left" labelAlign="left" :labelWidth="70" class="big-font form-main">
			<view class="head">
				<view class="title">
					<slot name="title"></slot>
				</view>
				<view class="tag1">
					<slot name="tag"></slot>
				</view>
			</view>
			<slot name="default"></slot>
			<view class="foot">
				<slot name="foot"></slot>
			</view>

		</up-form>
	</scroll-view>
</template>
<script lang="ts" setup>
	
	const props=defineProps<{
			bgColor:{
				type:string,
				default:'white'
			}
		}>()
	const emit=defineEmits(['onClick'])
	
</script>

<style scoped lang="scss">
	.card-border2 {

		max-height: 80vh;
		max-width: 90% !important;
	}

	.head {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		border-bottom: 100rpx;
		min-height: 100rpx;


		.title {
			font-size: 18px;
			font-weight: bold;
		}

		.tag1 {
			min-width: 200rpx;
			display: flex;
			gap: 2rpx;
			flex-direction: row;
			
		}
	}
</style>