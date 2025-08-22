<!--
 * @Author: 张连登 17875477802@163.com
 * @Date: 2025-04-28 11:54:43
 * @LastEditors: 张连登 17875477802@163.com
 * @LastEditTime: 2025-05-28 12:49:23
 * @FilePath: \xingye-wechat\components\x-tag\x-tag.vue
 * @Description: 
 * 
 * Copyright 2025 xingye/'zld', All Rights Reserved. 
-->
<template>
	<view class="custom-dropdown-container">
		<view class="custom-dropdown">
			<view class="label"  @click.stop="toggleDropdown" v-if="!showDropdown">
				<view class="dropdown-title" :style="{ fontSize: titleFontSize }">
					{{ selectedLabel || placeholder }}
				</view>
				<image
					:src="`${preImgUrl}/weigh/drop.png`"
					:style="{ width: String(iconSize).includes('px') ? iconSize : iconSize + 'rpx', height: String(iconSize).includes('px') ? iconSize : iconSize + 'rpx' }"
				/>
			</view>

			<u-search shape="round" :placeholder="selectedLabel || placeholder" v-model="searchVal" v-if="showDropdown" :showAction="false"></u-search>

			<view v-if="showDropdown" class="dropdown-options">
				<view v-for="(option,index) in searchOptions" :key="option.value+index" class="dropdown-option" :style="{ fontSize: optionFontSize }" @click.stop="selectOption(option)">
					{{ option.label }}
				</view>
			</view>
		</view>

		<view v-if="showDropdown" class="dropdown-mask" @click.stop="closeDropdown"></view>
	</view>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';
import { preImgUrl } from '../../utils/img';
interface Option {
	label: string;
	value: string | number;
}

const props = defineProps({
	options: {
		type: Array as () => Option[],
		required: true,
		default: () => []
	},
	modelValue: {
		type: [String, Number],
		default: '',
		validator: (value) => {
			return value === '' || typeof value === 'string' || typeof value === 'number';
		}
	},
	placeholder: {
		type: String,
		default: '请选择'
	},
	titleFontSize: {
		type: String,
		default: '25rpx'
	},
	optionFontSize: {
		type: String,
		default: '25rpx'
	},
	iconSize: {
		type: [String, Number],
		default: '17'
	}
});

const emit = defineEmits(['update:modelValue', 'change']);

const showDropdown = ref(false); //显示drop

const selectedLabel = ref(''); //显示的数据条label

const searchVal = ref('');
const searchOptions=ref<Option[]>([])

watch(showDropdown,()=>{
	searchVal.value=''
	searchOptions.value=props.options
})
watch(searchVal,(newVal)=>{
	//console.log(newVal,'searchVal change')
	searchOptions.value=props.options.filter((_)=>_.label.includes(newVal))
	//console.log(searchOptions.value,'sOptions')
})

onMounted(() => {
	handleVal();
});

watch(
	() => props.modelValue,
	() => {
		handleVal();
	}
);

const handleVal = () => {
	const op = props.modelValue ? props.options.filter((_) => _.value === props.modelValue) : [];
	if (op.length > 0) {
		selectedLabel.value = String(op[0]?.label);
	}
};

const toggleDropdown = () => {
	showDropdown.value = !showDropdown.value;
};

const closeDropdown = () => {
	showDropdown.value = false;
};

const selectOption = (option: Option) => {
	const newValue = option.value;
	selectedLabel.value = option?.label || '';

	emit('update:modelValue', newValue);
	emit('change', newValue);
	closeDropdown();
};
</script>
<style scoped lang="scss">
.custom-dropdown-container {
	position: relative;
	z-index: 100;
}

.custom-dropdown {
	position: relative;
	
	justify-content: flex-start;
	padding: 10rpx 20rpx;

	border-radius: 30rpx;
	z-index: 100;
	cursor: pointer;
	.label {
		display: flex;
		align-items: center;
		gap: 4rpx;
		
	}

	.dropdown-title {
		color: #000000;
		font-weight: bold;
	}

	.dropdown-options {
		position: absolute;
		top: 100%;
		left: 0;
		right: 0;
		margin-top: 5rpx;
		border: 1rpx solid #dcdfe6;
		border-radius: 15rpx;
		background-color: #fff;
		box-shadow: 0 2rpx 12rpx 0 rgba(0, 0, 0, 0.1);
		z-index: 100;
		max-height: 400rpx;
		overflow-y: auto;

		.dropdown-option {
			padding: 10rpx 20rpx;
			color: #606266;

			&:hover {
				background-color: #b9c1fa;
			}
		}
	}
}

.dropdown-mask {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 99;
}
</style>