
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
	import { computed, defineComponent } from "vue";
	
	


	export default defineComponent({
		name: 'ZInput',
		emits: ['update:modelValue', 'onClick','onChange','onBlur','blur'],
		props: {
		label:{
			type:String,
			default:''
		},
		modelValue:{
			type:[String, Number],
			default:''
		},
		rule:{
			type:String,
			default:''
		},
		disabled:{
			type:Boolean,
			default:false
		},
		bottomLine:{
			type:Boolean,
			default:false
		},
		errorMessage:{
			type:String,
			default:''
		},
		textarea:{
			type:Boolean,
			default:false,
		},
		required:{
			type:Boolean,
			default:false,
		},
		placeholder:{
			type:String,
			default:''
		},
		type:{
			type:String,
			default:'text'
		}
		
	},
		setup(props, { emit }) {
			
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

<style scoped  lang="scss">
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