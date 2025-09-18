<template>
	<up-form :rules="rules" labelPosition="left" labelAlign="left" :labelWidth="70">
		<up-form-item prop="_" :label="(required?'*':'')+label" :labelWidth="labelWidth" :required='required' @click="emitClick($emit, $event)">
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
import { computed, defineComponent, type PropType } from "vue";
import { type InputType } from "@zmini/theme";
/**
 * ZInput 输入框组件
 * @description
 *  对 uview-plus 的 up-form-item + up-input 做二次封装，可同时兼容普通输入框与文本域。
 *  必须放在 up-form 或 ZListCard 内部使用，受 uni / vue3 双向绑定语法 v-model 控制。
 *
 *  使用 textarea 且开启 count 字数统计时，u--textarea 内部会读取 innerValue.length；
 *  在 vue3 双向绑定瞬间可能为 null，导致控制台报错“TypeError: Cannot read property 'length' of null”，
 *  属于 uview-plus 官方已知缺陷，不影响实际功能，可忽略。
 *  当 disabled=true 时，组件不再渲染 up-input，而是直接输出纯文本，避免用户误以为可编辑。
 *
 * @property {String}            label                   左侧文字标题
 * @property {String|Number}     modelValue    (v-model) 双向绑定的字段值
 * @property {Boolean}           disabled                是否仅作纯展示（true 时输入框消失，仅渲染文本）
 * @property {Boolean}           bottomLine              是否显示底部分割线（默认 false）
 * @property {String}            rule                    对应 up-form 的 rules[prop] 中的字段名，用于统一校验
 * @property {String}            errorMessage            手动传入的底部错误提示（优先级高于 rule 校验结果）
 * @property {Boolean}           textarea                是否以多行文本域形式渲染
 * @property {Boolean}           required                是否显示左侧红色星号 *（同时自动生成对应校验规则）
 * @property {String}            placeholder             占位文字；留空时组件会自动生成“请输入 xxx / 无 xxx”
 * @property {String}            type                    输入类型，与官方 up-input 保持一致  >>  text   – 文本输入键盘 / number – 数字输入键盘（App-vue 允许浮点；App-nvue 及各家小程序仅允许整数）/  idcard – 身份证键盘（微信、支付宝、百度、QQ）/ digit  – 带小数点数字键盘（App-nvue、微信、支付宝、百度、头条、QQ）/ password – 等同于 password=true
 * @event {Function} click/onClick     点击整行时触发，回调参数为当前 props 对象
 * @event {Function} change/onChange     值变化时触发，回调参数为 (value, props)
 * @event {Function} blur/onBlur       失焦时触发，回调参数为 (value, props)
 * @example <ZInput label="联系电话" v-model="form.phone" type="number" required rule="phone" placeholder="请输入 11 位手机号" />
 */
export default defineComponent({
	emits: baseEmits,
	props: {
		label: {
			type: String,
			default: ''
		},
		labelWidth:{
			type:String,
			default:'100px'
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
			type: String as PropType<InputType>, // 和u-input 保持一致
			default: 'text'
		}

	},
	setup(props:any) {
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