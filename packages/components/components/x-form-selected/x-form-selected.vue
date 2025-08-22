<!--
 * @Author: 张连登 17875477802@163.com
 * @Date: 2025-04-25 10:28:52
 * @LastEditors: 张连登 17875477802@163.com
 * @LastEditTime: 2025-07-25 10:45:24
 * @FilePath: \xingye-wechat\components\x-form-selected\x-form-selected.vue
 * @Description: 
 * 
 * compony:xingye,year:2025, code by 'zld', All Rights Reserved. 
-->
<template>
	<up-form>
		<up-form-item :label="label" :prop="rule" @click="onClick" :required="required">
			<up-input
				:model-value="modelValue"
				@update:model-value="$emit('update:modelValue', $event)"
				disabled
				disabledColor="#ffffff"
				:placeholder="`请选择${label}`"
				placeholderStyle="color: #999999"
				border="none"
			></up-input>
			<template #right>
				<up-icon name="arrow-right"></up-icon>
			</template>
		</up-form-item>
	</up-form>
	
	
	<up-action-sheet v-if="!useSearch" :show="show" :actions="dictOptions" :title="`请选择${label}`" @close="show = false" @select="onSelect"></up-action-sheet>
	
	
	<u-popup v-if="useSearch" :show="show" mode="bottom" @close="show = false" closeable>
		<view class="popup-header">
			<view class="text">{{`请选择${label}`}}</view>
			<u-search v-model="keyword" :placeholder="`请输入关键词搜索${label}`" :show-action="false" />
		</view>
		<scroll-view scroll-y class="popup-list">
			<u-cell-group>
				<u-cell v-for="item in filteredOptions" :key="item.value" :title="item.name" @click="onSelect(item)" clickable />
			</u-cell-group>
		</scroll-view>
	</u-popup>
	
	<view class="bottom-line" v-if="bottomLine"></view>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from 'vue';
import { formSelectedProps, formSelectedPropsType } from './x-form-selected.type';
import { useDictStore } from '../../src/store/erp/dict/dictStore';


export default defineComponent({
	name: 'XFormSelected',
	emits: ['onClick', 'update:modelValue', 'onSelect','update:realValue'],
	props: formSelectedProps,
	setup(props: formSelectedPropsType, { emit }) {
		const keyword = ref('');
		
		const filteredOptions = computed(() => dictOptions.value.filter((item) => item.name.toLowerCase().includes(keyword.value.toLowerCase())));
		
		const show = ref(false);
		
		const dictOptions = ref([]);
		
		

		const { bottomLine } = props;

		const _a = async (newVal) => {
			if (newVal && dictOptions.value.length <= 0) {
				dictOptions.value = getStandard(await useDictStore().getOptionsByDict(newVal));
			}
		};

		const _b = (newArr) => {
			if (Array.isArray(newArr) && newArr.length > 0) {
				dictOptions.value = getStandard(newArr);
			}
		};
		function initOptions() {
			dictOptions.value=[]
			
			 _a(props.dictName);
			_b(props.options);
			
		}
		
		function getStandard(arr: any[]) {
			const _arr = [...arr];
			const has = _arr.some((item) => item.value === '');
			if (!has) {
				_arr.unshift({ name: '无', value: '' });
			}
			return _arr;
		}

		
		watch(show,()=>{
			if(show.value){
				initOptions()
			}
		})

		function onClick() {
			
			emit('onClick', { ...props });
			if (props.isSelected) {
				show.value = true;
			}
		}

		function clear() {
			emit('update:modelValue', '');
			emit('onSelect', { name: '无', value: '' });
		}

		function onSelect(item: { name: any; value: any }) {
			if (item.name == '无') {
				emit('update:modelValue', '');
				emit('update:realValue','')
			} else {
				emit('update:modelValue', item.name);
				emit('update:realValue',item.value)
			}
			emit('onSelect', item);
			show.value=false;
			
		}

		return {
			bottomLine,
			onClick,
			clear,
			show,
			onSelect,
			dictOptions,
			filteredOptions,
			keyword
		};
	}
});
</script>

<style lang="scss" scoped>
.bottom-line {
	border-bottom: $x-form-item-border-bottom;
}

.popup-header {
	display: flex;
	flex-direction: column;
	
	
	gap:10rpx;
	
	padding: 20rpx;
	.text {
		width: 100%;
		display: flex;
		justify-content: center;
		font-size: 30rpx;
		font-weight: bold;
	}
}
.popup-list {
	max-height: 60vh;
}
</style>
