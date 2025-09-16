<template>

	<up-form :rules="rules" labelPosition="left" labelAlign="left" :labelWidth="70">
		<up-form-item prop="_" :label="label" :required='required' @click="emitClick($emit, $event)">
			<up-input :type="type" v-if="!disabled && !textarea" :model-value="modelValue"
				@update:modelValue="emitVModel($emit, $event)" @change="emitChange($emit, $event)"
				@blur="emitBlur($emit, $event)" border="none" :placeholder="placeholder" clearable
				placeholderStyle='color: #999999'>
			</up-input>
			<u-textarea :type="type" v-else-if="textarea" :disabled="disabled" :model-value="modelValue || ''"
				@update:model-value="emitVModel($emit, $event)" @change="emitChange($emit, $event)"
				@blur="emitBlur($emit, $event)" :placeholder="placeholder" :count="modelValue"
				:height="placeholder.length > 30 ? 120 : 71">
			</u-textarea>
			<text v-else-if='!textarea' style="color: #999999 ;">{{ modelValue }}</text>
		</up-form-item>
		<!-- 展示校验信息· -->
		<text class="error-message">{{ errorMessage }}</text> 
		<view class="bottom-line" v-if="bottomLine"></view>
	</up-form>

</template>

<script lang="ts">
import { baseEmits, emitBlur, emitChange, emitClick, emitVModel } from "@zmini/utils";
import { computed, defineComponent } from "vue";
/**
 * ZInput 输入框组件 todo
 * @description 输入框组件,用于在uviewplus的 up-form标签 或者 ZListCard 标签的里面 元素
 * @property {Array}	bgColors			背景色
 * @property {String}	height			    高度
 * @property {String}	borderRadius		圆角
 * @property {Object}   customStyle		    定义需要用到的外部样式
 * 
 * @event {Function}			click			点击cell列表时触发
 * @example <up-box colors=['blue', 'red', 'yellow'] height="200px"></up-box>
 */
export default defineComponent({
	name: 'ZInput',
	emits: baseEmits,
	props: {
		label: {
			type: String,
			default: ''
		},
		modelValue: {
			type: [String, Number],
			default: ''
		},
		rule: {
			type: String,
			default: ''
		},
		disabled: {
			type: Boolean,
			default: false
		},
		bottomLine: {
			type: Boolean,
			default: false
		},
		errorMessage: {
			type: String,
			default: ''
		},
		textarea: {
			type: Boolean,
			default: false,
		},
		required: {
			type: Boolean,//显示左边*号(提示用户必须填,会作判断逻辑...开发中)
			default: false,
		},
		placeholder: {
			type: String,//占位文字
			default: ''
		},
		type: {
			type: String,//和u-input 保持一致
			default: 'text'
		}

	},
	setup(props) {
		const rules = computed(() => {
			return {
				_: [
					{ required: props.required, message: props.placeholder, trigger: ['blur', 'change'] }
				]
			}
		})
		return {
			placeholder: computed(() => {
				if (props.placeholder) {
					return props.placeholder
				}
				if (props.disabled) {
					return '无' + props.label
				}
				return '请输入' + props.label
			}),
			rules,
			emitBlur, emitChange, emitVModel, emitClick

		}
	}
})
</script>

<style scoped lang="scss">
@import '../style/global.scss';

.bottom-line {
	border-bottom: 1px solid #e5e5e5 !important;
}

.error-message {
	display: block;
	margin-top: 4px;
	font-size: 12px;
	color: red;
}
</style>