<template>
	<view @click="$emit('onCliek', $event)">
		<u-collapse-item :name="title" :key="title">
			<template #title>
				<view class="title">
					<view>
						<view class="small-title">
							{{ title }}
						</view>
					</view>
				</view>
			</template>
			<slot></slot>
		</u-collapse-item>
	</view>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
	name: 'DrawerItem',
	emits: ['onClick'],
	props: {
		title: {
			type: String,
			default: ''
		}
	}
});
</script>

<style scoped lang="scss">
.title {
	color: black;
	height: 32rpx;
	width: 32rpx;
	margin-left: 16rpx;
}
.small-title {
	display: flex;
	align-items: center;
	font-size: 28rpx;
	margin-bottom: 32rpx;
}
</style>
