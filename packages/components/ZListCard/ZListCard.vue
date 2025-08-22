<template>
	<scroll-view scroll-y class="card-border card-border2" @click.stop="$emit('onClick',$event)" :style="{backgroundColor:bgColor,width}">
		<up-form labelPosition="left" labelAlign="left" :labelWidth="70" class="big-font form-main">
			<view class="head" v-if="$slots.title || $slots.tag">
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
	
	defineProps<{
			bgColor:{
				type:String,
				default:'white'
			},
			width:{
				type:String,
				default:'80vw'
			}
		}>()
	const emit=defineEmits(['onClick'])
	
</script>

<style scoped lang="scss">
	@import '../style/global.scss';
	.card-border2 {

		max-height: 80vh;
		width: 80vw;
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