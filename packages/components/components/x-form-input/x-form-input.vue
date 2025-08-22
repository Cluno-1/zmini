<!--
 * @Author: 张连登 17875477802@163.com
 * @Date: 2025-04-25 09:16:39
 * @LastEditors: zld 17875477802@163.com
 * @LastEditTime: 2025-08-11 09:45:51
 * @FilePath: \xingye-wechat\components\form-input\form-input.vue
 * @Description: 
 * 
 * compony:xingye,year:2025, code by 'zld', All Rights Reserved. 
-->

<template>
	<view @click="onClick">
		<up-form>
			<up-form-item :prop="rule" :label="label" :required='required'>
				<up-input
					:type="type"
					v-if="!disabled && !textarea" 
					:model-value="modelValue"
					@update:modelValue="$emit('update:modelValue', $event)" 
					@change="$emit('onChange',$event)"
					@blur="$emit('blur', $event);$emit('onBlur', $event)"
					border="none" 
					:placeholder="placeholder"
					clearable placeholderStyle='color: #999999'
					>
				</up-input>
				<u-textarea
					:type="type"
					v-else-if="textarea" 
					:disabled="disabled"
					:model-value="modelValue || ''"
					@update:model-value="$emit('update:modelValue', $event)"
					@change="$emit('onChange',$event)"
					@blur="$emit('blur', $event);$emit('onBlur', $event)"
					:placeholder="placeholder" 
					:count="modelValue"
					:height="placeholder.length>30?120:71"
					 >
				</u-textarea>
				<text v-else-if='!textarea' style="color: #999999 ;">{{modelValue}}</text>	
			</up-form-item>
			<!-- 展示校验信息· -->
			<text class="error-message">{{errorMessage}}</text>
			<view class="bottom-line" v-if="bottomLine"></view>
		</up-form>
	</view>
</template>

<script lang="ts">
	import { computed, defineComponent, ref, watch } from "vue";
	import { formInputProps, formInputPropsType } from "./x-form-input.type";
	import { emit } from "process";


	export default defineComponent({
		name: 'XFormInput',
		emits: ['update:modelValue', 'onClick','onChange','onBlur','blur'],
		props: formInputProps,
		setup(props : formInputPropsType, { emit }) {
			
			function onClick() {
				emit('onClick',{...props})
			}
			return {
				placeholder: computed(()=>{
					if(props.placeholder){
						return props.placeholder
					}
					if(props.disabled){
						return '无' + props.label
					}
					return '请输入' + props.label
				}),
				onClick,
			}
		}


	})
</script>

<style scoped lang="scss">
	.bottom-line {
		border-bottom: $x-form-item-border-bottom;
	}
	.error-message {
	  display: block;
	  margin-top: 4px;
	  font-size: 12px;
	  color: red;
	}
</style>