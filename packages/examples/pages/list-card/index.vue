<template>
	<view class="layout">
		<!-- 实时预览区 --> 
		<view class="flex-col" style="background-color: gray;width: 97vw;height: 30vh;">
			<ZListCard @click="onClick" :bgColor="_.bgColor" :width="_.width">
				<template #title>{{_.title}}</template>

				<template #tag>{{_.tag}}</template>

				{{_.default}}

				<template #foot>
					{{_.foot}}
				</template>
			</ZListCard>
		</view>
		<ZListCard>

			<template #title>配置</template>
			<ZInput v-model="_.bgColor" label='bgColor:' bottomLine />
			<ZInput v-model="_.width" label='width:' bottomLine />
			<ZInput v-model="_.title" label='title:' bottomLine />
			<ZInput v-model="_.tag" label='tag:' bottomLine />
			<ZInput v-model="_.default" label='default:' bottomLine />
			<ZInput v-model="_.foot" label='foot:' bottomLine />


		</ZListCard>
	</view>
</template>

<script setup>
	import {
		reactive
	} from 'vue';


	const _ = reactive({
		bgColor:'white',
		width:'80vw',
		title: '标题slot',
		tag: 'tag slot',
		default: 'default slot',
		foot: 'foot slot',
	})

	function onClick(e) {
		console.log('click:', e)
	}
</script>

<style>

</style>