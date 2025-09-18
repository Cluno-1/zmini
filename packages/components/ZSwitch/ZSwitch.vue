<template>
	<view class="switch">

		<view class="item">
			<view v-show="value !== '' && value !== null && !value">
				<slot name='leftText'></slot>
				<slot name='inactiveText'></slot>
				<text>{{ inactiveText }}</text>
			</view>
			<view class="item" v-show="value === '' || value === null">
				<text>{{ nullText }}</text>
			</view>

		</view>

		<view class="item" @click="value === '' ? $emit('onUse') : null">
			<u-switch :activeColor='activeColor' :inactiveColor='inactiveColor' :disabled="disabled || value === ''"
				:model-value="Boolean(value)" :size="size" @update:model-value="$emit('onChange', $event)"></u-switch>
		</view>
		<view class="item">
			<view v-show="value !== '' && value !== null && value">
				<text>{{ activeText }}</text>
				<slot name='activeText'></slot>
				<slot name='rightText'></slot>
			</view>

		</view>

		<view v-show="value !== '' && value !== null" @click="$emit('onUnuse')">
			<up-icon name="backspace"></up-icon>
		</view>

	</view>
</template>
<script lang="ts">
import { defineComponent, type PropType } from "vue"


export default defineComponent({
	name: 'ZSwitch',
	emit: ['onChange', 'onUse', 'onUnuse'],
	props: {
		size: {
			type: String || Number,
			default: '20'
		},
		disabled: {
			type: Boolean,
			default: false,
		},
		activeColor: {
			type: String,
			default: '#235BF7',
		},
		inactiveColor: {//没选中状态颜色
			type: String,
			default: '#D3D3D3',
		},
		value: {
			type: [String, Boolean] as PropType<boolean | string>,
			default: '',
		},
		activeText: {
			type: String,
			default: '',
		},
		nullText: {
			type: String,
			default: '置空',
		},
		inactiveText: {
			type: String,
			default: '',
		},



	}
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