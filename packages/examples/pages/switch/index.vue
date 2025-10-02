<template>
	<view class="layout">
		<view class="flex-col"
			style="background-color: gray;width: 97vw;height: 30vh;display: flex;align-items: center;justify-content: center;">
			<view style="display: flex;flex-direction: column;gap: 30rpx;align-items: center;">
				<view class="demo-switch">
					<ZSwitch v-model="_.value" :size="_.size" :disabled="_.disabled" :activeColor="_.activeColor"
						:useTernary='_.useTernary' :inactiveColor="_.inactiveColor" :activeText="_.activeText"
						:inactiveText="_.inactiveText" :nullText="_.nullText" @onChange="handleChange"
						@onUse="handleUse" @onUnuse="handleUnuse" />
				</view>
				<view class="status-text" v-if="_.value === ''">
					当前状态：置空
				</view>
				<view class="status-text" v-else>
					当前状态：开启
				</view>

			</view>
		</view>
		<ZListCard>
			<template #title>配置</template>

			<ZInput v-model.number="_.size" label='size 大小:' bottomLine placeholder="默认值: 20" />
			<u-form>
				<u-form-item label="v-model:" labelWidth="100" borderBottom>
					<ZButton :type="_.value===''||_.value===null?'blue':'plain'" @click="_.value=''" :round="false"
						size="mini">' '
					</ZButton>
					<ZButton :type="_.value===false?'blue':'plain'" @click="_.value=false" size="mini" :round="false">
						false</ZButton>
					<ZButton :type="_.value===true?'blue':'plain'" @click="_.value=true" size="mini" :round="false">true
					</ZButton>
				</u-form-item>
				<u-form-item label="disabled 是否禁用:" labelWidth="100" borderBottom>
					<u-switch v-model="_.disabled"></u-switch>
				</u-form-item>
				<u-form-item label="useTernary 三元/二元" labelWidth="100" borderBottom>
					<ZSwitch v-model="_.useTernary" active-text="三元" inactive-text="二元" :useTernary="false"></ZSwitch>
				</u-form-item>
			</u-form>
			<ZInput v-model="_.activeColor" label='activeColor 激活颜色:' bottomLine placeholder="默认值: #235BF7" />
			<ZInput v-model="_.inactiveColor" label='inactiveColor 非激活颜色:' bottomLine placeholder="默认值: #D3D3D3" />
			<ZInput v-model="_.activeText" label='activeText 激活文本:' bottomLine placeholder="默认值: ''" />
			<ZInput v-model="_.inactiveText" label='inactiveText 非激活文本:' bottomLine placeholder="默认值: ''" />
			<ZInput v-model="_.nullText" label='nullText 置空文本:' bottomLine placeholder="默认值: 置空" />

		</ZListCard>
	</view>
</template>

<script setup lang='ts'>
	import {
		reactive,
		watch
	} from 'vue';


	const _ = reactive < {
		value: '' | null | boolean, // 默认置空状态
		size: number,
		disabled: boolean,
		useTernary: boolean,
		activeColor: string,
		inactiveColor: string,
		activeText: string,
		inactiveText: string,
		nullText: string,
	} > ({
		value: '', // 默认置空状态
		size: 20,
		disabled: false,
		activeColor: '#235BF7',
		inactiveColor: '#D3D3D3',
		activeText: '启用',
		inactiveText: '未启用',
		nullText: '置空',
		useTernary: true,
	})

	watch(_, () => {
		if (!_.useTernary && (_.value === '' || _.value === null)) {
			_.value = false
		}
	})


	// 处理开关状态改变
	const handleChange = (newValue: boolean | '') => {
		console.log('开关状态改变:', newValue)
		// _.value = newValue
	}

	// 处理使用开关
	const handleUse = () => {
		console.log('开关被使用');
	}

	// 处理取消使用开关
	const handleUnuse = () => {
		console.log('开关被取消使用');
	}

	// 设置为非空状态
	const setNonNull = () => {
		if (_.value === '') {
			_.value = false;
		} else {
			_.value = '';
		}
	}
</script>

<style scoped>
	.layout {
		display: flex;
		flex-direction: column;
		padding: 20rpx;
		gap: 20rpx;
	}

	.demo-switch {
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
</style>