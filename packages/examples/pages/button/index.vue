<template>
	<view class="layout">
		<view class="flex-col" style="background-color: gray;width: 97vw;height: 20vh;">
			<ZButton :name="_.name" :loading='_.loading' :type="_.type" :bgColor='_.bgColor' :color="_.color"
				:round="_.round" :width="_.width" :size="_.size" />
		</view>
		<ZListCard>

			<template #title>配置</template> 

			<ZInput v-model="_.name" label='name 文本:' bottomLine />
			<ZInput v-model="_.type" label='type 预设颜色:' bottomLine />
			<ZInput v-model="_.width" label='width 宽度(带单位):' bottomLine />
			<ZInput v-model="_.bgColor" label='bgColor 背景颜色:' bottomLine />
			<ZInput v-model="_.color" label='color 文本颜色:' bottomLine />
			<ZInput v-model="_.size" label='size 大小:' bottomLine />
			<u-form-item label="loading 是否加载:">
				<ZSwitch :value='_.loading' @onChange='_.loading=!_.loading'></ZSwitch>
			</u-form-item>
			<u-form-item label="round 是否圆角:">
				<ZSwitch :value='_.round' @onChange="_.round=!_.round"></ZSwitch>
			</u-form-item>

		</ZListCard>
	</view>
</template>

<script setup lang='ts'>
	import {
		reactive,
		ref
	} from 'vue';

	const _ = reactive({
		name: '确认',
		loading: false,
		type: 'info',
		bgColor: '',
		width: '30vw',
		color: '',
		size: 'default',
		round: false,

	})
</script>

<style>
</style>