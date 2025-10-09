<template>
	<view class="layout">
		<view class="flex-col"
			style="background-color: gray;width: 97vw;height: 30vh;display: flex;align-items: center;justify-content: center;">
			<view style="display: flex;flex-direction: column;gap: 30rpx;align-items: center;">
				<view class="demo-drop">
					<ZDrop :options="_.options" v-model="_.value" :placeholder="_.placeholder"
						:titleFontSize="_.titleFontSize" :optionFontSize="_.optionFontSize" @onChange="handleChange"
						:maskColor='_.maskColor' @onClick="handleClick" />
				</view>
			</view>
		</view>
		<ZListCard>
			<template #title>配置</template>
			<ZInput v-model="_.value" label='值:' bottomLine placeholder="value" />
			<ZInput v-model="_.placeholder" label='占位文本placeholder:' bottomLine placeholder="默认值: 请选择" />
			<ZInput v-model="_.titleFontSize" label='标题字体大小titleFontSize:' bottomLine placeholder="默认值: 25rpx" />
			<ZInput v-model="_.optionFontSize" label='选项字体大小optionFontSize:' bottomLine placeholder="默认值: 25rpx" />
			<ZInput v-model="_.maskColor" label='蒙版颜色' bottomLine placeholder="" />
			<view class="option-list">
				<view class="option-list-title">示例选项</view>
				<view class="option-item" v-for="(item, index) in _.options" :key="item.value">
					<ZInput v-model="item.label" placeholder="选项文本" :style="{ width: '40%' }" />
					<ZInput v-model="item.value" placeholder="选项值" :style="{ width: '30%' }" />
					<ZButton @click="removeOption(index)" size="mini" type="error" :round="false"
						:style="{ width: '30%' }">
						删除
					</ZButton>
				</view>
				<ZButton @click="addOption" type="success" :round="false" size="mini" :style="{ marginTop: '20rpx' }">
					添加选项
				</ZButton>
			</view>
		</ZListCard>
	</view>
</template>
<script setup lang='ts'>
	import {
		reactive
	} from 'vue';
	import {
		guangdongCities
	} from './guangdongCities';


	interface Option {
		label: string;
		value: string | number;
	}
	const _ = reactive < {
		options: Option[],
		value: string | number,
		placeholder: string,
		titleFontSize: string,
		optionFontSize: string,
		maskColor: string,
	} > ({
		options: guangdongCities,
		value: '',
		placeholder: '请选择广东省城市',
		titleFontSize: '',
		optionFontSize: '',
		maskColor: '',
	})

	// 获取选中项的标签文本
	const getSelectedLabel = () => {
		if (!_.value) return '';
		const selectedOption = _.options.find(option => option.value === _.value);
		return selectedOption ? selectedOption.label : '';
	}
	// 处理选择项改变
	const handleChange = (newValue: string | number) => {
		console.log('选择项改变:', newValue)
	}

	// 处理点击事件
	const handleClick = (event: Event) => {
		console.log('组件被点击:', event)
	}

	// 添加新选项
	const addOption = () => {
		_.options.push({
			label: '新选项',
			value: `option${Date.now()%10000}`
		});
	}

	// 删除选项
	const removeOption = (index: number) => {
		// 如果删除的是当前选中的选项，清空选择
		if (_.options[index]?.value === _.value) {
			_.value = '';
		}
		_.options.splice(index, 1);
	}
</script>

<style scoped>
	.layout {
		display: flex;
		flex-direction: column;
		padding: 20rpx;
		gap: 20rpx;
	}

	.demo-drop {
		padding: 40rpx;
		background-color: white;
		border-radius: 12rpx;
		box-shadow: 0 2rpx 10rpx rgba(0, 0, 0, 0.1);
	}

	.status-text {
		margin-top: 20rpx;
		font-size: 28rpx;
		color: #666;
	}

	.option-list {
		margin-top: 20rpx;
	}

	.option-list-title {
		font-size: 28rpx;
		font-weight: bold;
		margin-bottom: 10rpx;
		color: #333;
	}

	.option-item {
		display: flex;
		align-items: center;
		gap: 10rpx;
		margin-bottom: 10rpx;
		padding: 10rpx;
		background-color: #f5f5f5;
		border-radius: 8rpx;
	}
</style>