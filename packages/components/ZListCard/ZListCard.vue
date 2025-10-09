<template>
	<scroll-view scroll-y class="z-card card-border2" @click.stop="emitClick($emit, $event)"
		:style="{ background: bgColor, width }">
		<up-form labelPosition="left" labelAlign="left" :labelWidth="70" class="z-card-main">

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
<script lang="ts">
import { baseEmits, emitClick } from "@zmini/utils";
import { defineComponent } from 'vue';

/**
 * ZCard 卡片容器组件
 * @module ZCard
 * @description
 *  通用卡片容器，支持自定义背景色/宽度，提供 title、tag、default、foot 四组插槽。
 *  点击卡片任意区域可触发 click 事件，并阻止事件冒泡。
 *
 * @property {string} bgColor 卡片背景色，默认 'white'
 * @property {string} width   卡片宽度，默认 '80vw'
 *
 * @event {Function} click 点击卡片时触发，回调参数为事件对象 $event
 *
 * @slot title  卡片头部左侧标题区域
 * @slot tag    卡片头部右侧标签区域
 * @slot default 卡片主体内容区域
 * @slot foot   卡片底部内容区域
 *
 * @example
 * <ZCard bgColor="#fafafa" width="90vw" @click="onCardClick">
 *   <template #title>订单信息</template>
 *   <template #tag><ZTag>已支付</ZTag></template>
 *   <template #default>这里是主体内容</template>
 *   <template #foot><ZButton>查看详情</ZButton></template>
 * </ZCard>
 */
export default defineComponent({
	emits: baseEmits,
	props: {
		bgColor: {
			type: String,
			default: 'white'
		},
		width: {
			type: String,
			default: '80vw'
		}

	},
	setup() {
		return {
			emitClick
		}
	}
})
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