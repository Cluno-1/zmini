<template>
	<view class="switch" @click="emitClick($emit, $event)" @blur="emitBlur($emit, $event)">

		<view class="item">
			<view v-show="modelValue !== '' && modelValue !== null">
				<slot name='leftText'></slot>
				<slot name='inactiveText'></slot>
				<text>{{ inactiveText }}</text>
			</view>
			<view class="item" v-show="useTernary && modelValue === '' || modelValue === null">
				<text>{{ nullText }}</text>
			</view>
		</view>
		<view class="item" @click="modelValue === '' || modelValue === null ? update(false) : ''">
			<u-switch :activeColor='activeColor' :inactiveColor='inactiveColor'
				:disabled="disabled || modelValue === ''"
				:modelValue="modelValue === '' || modelValue === null ? false : Boolean(modelValue)"
				@update:modelValue="update" :size="size"></u-switch>
		</view>
		<view class="item">
			<view v-show="modelValue !== '' && modelValue !== null">
				<text>{{ activeText }}</text>
				<slot name='activeText'></slot>
				<slot name='rightText'></slot>
			</view>
		</view>
		<view v-show="useTernary && modelValue !== '' && modelValue !== null"
			@click="useTernary ? (emitUnuse($emit, $event), emitChange($emit, ''), emitVModel($emit, '')) : ''">
			<up-icon name="backspace"></up-icon>
		</view>

	</view>
</template>
<script lang="ts">
import { baseEmits, emitChange, emitClick, emitBlur, emitVModel } from "@zmini/utils";
import { defineComponent, type PropType } from "vue"

/** 
 * ZSwitch 开关组件
 * @description 
 *  对 uview-plus 的 u-switch 做二次封装，支持三种状态：激活状态、非激活状态和置空状态。
 *  通过 v-model 控制组件的值，值为布尔值时表示开关状态，为空字符串时表示置空状态。
 *  置空状态下可点击开关进行使用，使用后可点击回退按钮再次置空。
 * 
 * @property {String|Number}     size                   开关大小，默认值为 '20'
 * @property {Boolean}           disabled               是否禁用组件，默认值为 false
 * @property {String}            activeColor            激活状态颜色，默认值为 '#235BF7'
 * @property {String}            inactiveColor          非激活状态颜色，默认值为 '#D3D3D3'
 * @property {Boolean}           useTernary             是否使用三状态，默认值为 true
 * @property {String|Boolean}    modelValue   			(v-model) 组件的值，支持布尔值或空字符串，默认值为 ''
 * @property {String}            activeText             激活状态显示的文本，默认值为 ''
 * @property {String}            nullText               置空状态显示的文本，默认值为 '置空'
 * @property {String}            inactiveText           非激活状态显示的文本，默认值为 ''
 * 
 * @event {Function} onUse/use   点击未使用状态的开关时触发，回调参数为事件对象 $event   
 * @event {Function} onChange/change    开关状态改变时触发，回调参数为新的状态值
 * @event {Function} onUnuse/unuse 点击回退按钮置空时触发，回调参数为事件对象 $event
 * @event {Function} click/onClick  点击组件区域时触发，回调参数为事件对象 $event
 * @event {Function} blur/onBlur    组件失去焦点时触发，回调参数为事件对象 $event
 * 
 * @slot leftText                左侧文本插槽，在非激活状态下显示
 * @slot inactiveText            非激活状态文本插槽，优先级高于 inactiveText 属性
 * @slot activeText              激活状态文本插槽，优先级高于 activeText 属性
 * @slot rightText               右侧文本插槽，在激活状态下显示
 * 
 * @example <ZSwitch :value="switchValue" activeText="开启" inactiveText="关闭" /> 
 */
export default defineComponent({
	name: 'ZSwitch',
	emit: [...baseEmits, 'onUse', 'use', 'onUnuse', 'unuse'],
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
		useTernary: {
			type: Boolean,
			default: true,
		},
		modelValue: {
			type: [String, null, Boolean] as PropType<boolean | string | null>,
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

	},
	setup(props, { emit }) {
		function emitUse(
			emit: (event: string, ...args: any[]) => void,
			...args: any[]
		) {
			emit("onUse", ...args);
			emit("use", ...args);
		}

		function emitUnuse(
			emit: (event: string, ...args: any[]) => void,
			...args: any[]
		) {
			emit("onUnuse", ...args);
			emit("unuse", ...args);
		}
		function update(event: any) {
			
			props.disabled ? '' : props.modelValue === '' || props.modelValue === null ? (emitVModel(emit, false),emitChange(emit, false),emitUse(emit)) : (emitVModel(emit, event),emitChange(emit, event))
			
		}

		return {
			update,
			emitClick,
			emitChange,
			emitBlur,
			emitUse,
			emitUnuse,
			emitVModel,
		}
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