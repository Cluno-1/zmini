<!--
 * @Author: 张连登 17875477802@163.com
 * @Date: 2025-04-28 11:54:43
 * @LastEditors: 张连登 17875477802@163.com
 * @LastEditTime: 2025-04-28 12:49:23
 * @FilePath: \xingye-wechat\components\x-tag\x-tag.vue
 * @Description: 
 * 
 * Copyright 2025 xingye/'zld', All Rights Reserved. 
-->

<template>
	<up-tag :text="text" size="mini" :type="type" v-if="text" :bg-color="bgColor" :color="textColor" borderColor='white'></up-tag>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted, reactive, ref, watchEffect } from 'vue';
import { xTagOptionType, xTagProps, xTagPropsType } from './x-tag.type';
import { useDictStore } from '../../src/store/erp/dict/dictStore';

/**
 * @property {String}			type		标签类型info、primary、success、warning、error （默认 'primary' ）
 * @property {Object}			options
 *  @property {String}			value
 */
export default defineComponent({
	name: 'XTag',
	props: xTagProps,
	setup(props: xTagPropsType) {
		async function getDictArray(type: string) {
			const a = await useDictStore().getDict(type);
			return a[type];
		}
		async function getDictLabelByVal(dictType: string, value: any) {
			const arr: xTagOptionType[] = await getDictArray(dictType);
			let a = '';
			arr.map((_) => {
				if (_.dictValue == value) a = _.dictLabel;
			});

			return a;
		}
		const text = ref('');
		watchEffect(async () => {
			let _ = '';
			if (props.showValue) {
				text.value = props.value;
				return;
			}
			props.options.forEach((item) => {
				if (item.dictValue == String(props.value)) {
					_ = item.dictLabel.toString();
				}
			});

			if (props.dictType) {
				_ = await getDictLabelByVal(props.dictType, props.value);
			}
			text.value = _;
		});

		return {
			text
		};
	}
});
</script>

<style scoped lang="scss">
.a {
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
