<template>
	<view class="card-border">
		<up-form ref="form" labelPosition="left" labelAlign="left" :model="form" :labelWidth="80"
			class="big-font form-main">
			<up-form-item label="施工单位" prop="constructionUnit" borderBottom>
				<up-input v-model="form.constructionUnit" border="none" placeholder="请输入施工单位" clearable
					placeholderStyle='color: #999999' />
			</up-form-item>
			<up-form-item label="合同名称" prop="contractName" borderBottom>
				<up-input v-model="form.contractName" border="none" placeholder="请输入合同名称" clearable
					placeholderStyle='color: #999999' />
			</up-form-item>
			<up-form-item label="工程名称" prop="projectName" borderBottom>
				<up-input v-model="form.projectName" border="none" placeholder="请输入工程名称" clearable
					placeholderStyle='color: #999999' />
			</up-form-item>
			<up-form-item label="合同类型" prop="orderType" @click="orderTypePopup()" borderBottom>
				<up-input v-model="form.orderType" disabled disabledColor="#ffffff" placeholder="请选择合同类型"
					placeholderStyle='color: #999999' border="none"></up-input>
				<template #right>
					<up-icon size='19' color='#60626659' v-if="form.orderType" name="close-circle-fill"
						@tap.stop.prevent="clearOrderType($event)"></up-icon>
					<up-icon name="arrow-right" v-else></up-icon>
				</template>
			</up-form-item>
			<up-form-item label="是否垫资方" prop="isDzf" borderBottom @click="isDzfPopup()">
				<up-input v-model="displayIsDzf" disabled disabledColor="#ffffff" placeholder="请选择是否垫资方"
					placeholderStyle='color: #999999' border="none"></up-input>
				<template #right>
					<up-icon size='19' color='#60626659' v-if="form.isDzf" name="close-circle-fill"
						@tap.stop.prevent="clearDzf($event)"></up-icon>
					<up-icon name="arrow-right" v-else></up-icon>
				</template>
			</up-form-item>
		</up-form>
		<up-action-sheet :show="showOrderType" :actions="orderType" title="合同类型" @close="showOrderType = false"
			@select="orderTypeSelect">
		</up-action-sheet>
		<up-action-sheet :show="showIsDzf" :actions="isDzf" title="是否垫资方" @close="showIsDzf = false"
			@select="isDzfSelect">
		</up-action-sheet>
	</view>
	<button class="seach" @click="submit()">查询</button>
</template>

<script setup>
	import {
		reactive,
		ref,
		defineEmits,
		computed
	} from 'vue'
	const emit = defineEmits(["seachData"]);
	const form = reactive({
		constructionUnit: '',
		contractName: '',
		projectName: '',
		orderType: '',
		isDzf: '',
	})

	const showOrderType = ref(false)
	const orderType = [{
			name: '混凝土'
		},
		{
			name: '砂浆'
		},
	]

	function orderTypePopup() {
		// //console.log(123);
		showOrderType.value = true
		uni.hideKeyboard()
	}

	function orderTypeSelect(e) {
		form.orderType = e.name;
	}
	const clearOrderType = (e) => {
		e?.stopPropagation()
		e?.preventDefault()
		form.orderType = null
		showOrderType.value = false
	}


	const showIsDzf = ref(false)
	const displayIsDzf = computed(() => {
		const selected = isDzf.find(item => item.value === form.isDzf);
		return selected ? selected.name : '';
	})
	const isDzf = [{
			name: '是',
			value: 'Y'
		},
		{
			name: '否',
			value: 'N'
		},
	]

	function isDzfPopup() {
		showIsDzf.value = true
		uni.hideKeyboard()
	}

	function isDzfSelect(e) {
		form.isDzf = e.value;
	}

	function submit() {
		emit("seachData", form);
	}
	const clearDzf = (e) => {
		e?.stopPropagation()
		e?.preventDefault()
		form.isDzf = null
		showIsDzf.value = false
	}
</script>

<style lang="scss" scoped>
	.seach {
		width: 100%;
		padding: 4rpx 0;
		background: linear-gradient(135deg, #235BF7 0%, #7796E5 100%);
		border-radius: 34rpx 34rpx 34rpx 34rpx;
		color: #fff;
		font-size: 28rpx;
		margin-bottom: 32rpx;
	}
</style>