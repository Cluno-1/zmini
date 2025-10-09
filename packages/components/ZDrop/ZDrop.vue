<!--
 * @Author: 张连登 17875477802@163.com
 * @Date: 2025-04-28 11:54:43
 * @LastEditors: zld 17875477802@163.com
 * @LastEditTime: 2025-10-03 09:01:34
 * @FilePath: \zmini\packages\components\ZDrop\ZDrop.vue
 * @Description: 
 * 
 * Copyright 2025 xingye/'zld', All Rights Reserved. 
-->
<template>
	<view class="custom-dropdown-container" @click="emitClick($emit, $event)">
		<view class="custom-dropdown">
			<view class="label" @click.stop="toggleDropdown" v-if="!showDropdown">
				<view class="dropdown-title" :style="{ fontSize: titleFontSize }">
					{{ selectedLabel || placeholder }}
				</view>
			</view>
			<u-search shape="round" :placeholder="selectedLabel || placeholder" v-model="searchVal" v-if="showDropdown"
				:showAction="false"></u-search>

			<view v-if="showDropdown" class="dropdown-options" >
				<view v-for="(option, index) in searchOptions" :key="option.value + String(index)"
					class="dropdown-option" :style="{ fontSize: optionFontSize }" @click.stop="selectOption(option)">
					{{ option.label }}
				</view>
			</view>
		</view>

		<view v-if="showDropdown" class="dropdown-mask" @click.stop="closeDropdown" :style="{ backgroundColor: maskColor }"></view>
	</view>
</template>

<script lang="ts">
import { baseEmits, emitChange, emitClick, emitVModel } from "@zmini/utils/base/emit";
import { defineComponent, ref, watch, onMounted } from "vue"


interface Option {
	label: string;
	value: string | number;
}

/** 
 * ZDrop 下拉选择组件
 * @description 
 *  封装的下拉选择组件，支持搜索过滤功能。点击标题区域可以展开/收起下拉选项，点击蒙层区域可以收起下拉选项。
 *  通过 v-model 控制组件的值，值为选项的 value。
 * 
 * @property {Array}             options                下拉选项数组，每项包含 label 和 value，必填
 * @property {String|Number}     modelValue    (v-model) 选中的值，支持字符串或数字，默认值为空字符串
 * @property {String}            placeholder            未选择时的占位文本，默认值为 '请选择'
 * @property {String}            titleFontSize          标题字体大小，默认值为 '16px'
 * @property {String}            optionFontSize         选项字体大小，默认值为 '16px'
 * @property {String}     maskColor                     蒙版颜色  默认: rgba(0, 0, 0, 0.1)
 * @event {Function} onChange/change    选择项改变时触发，回调参数为新的选中值
 * @event {Function} click/onClick      点击组件区域时触发，回调参数为事件对象 $event
 * 
 * @example <ZDrop :options="options" v-model="selectedValue" placeholder="请选择城市" /> 
 */
export default defineComponent({
	name: 'ZDrop',
	emit: [...baseEmits],
	props: {
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
			default: '16px'
		},
		optionFontSize: {
			type: String,
			default: '16px'
		},
		maskColor: {
			type: String,
			default: 'rgba(0, 0, 0, 0.1)'
		}
	},
	setup(props, { emit }) {
		const showDropdown = ref(false); //显示drop
		const selectedLabel = ref(''); //显示的数据条label
		const searchVal = ref('');
		const searchOptions = ref<Option[]>([])

		watch(showDropdown, () => {
			searchVal.value = ''
			searchOptions.value = props.options
		})
		watch(searchVal, (newVal) => {
			searchOptions.value = props.options.filter((_) => _.label.includes(newVal))
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
			} else {
				selectedLabel.value = '';
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

			emitVModel(emit, newValue);
			emitChange(emit, newValue);
			closeDropdown();
		};

		return {
			toggleDropdown,
			closeDropdown,
			selectOption,
			handleVal,
			showDropdown,
			selectedLabel,
			searchVal,
			searchOptions,
			emitClick
		}
	}
})
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
				background-color: #f5f7fa;
			}
		}
	}
}

.dropdown-mask {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.1);
	z-index: 99;
}
</style>