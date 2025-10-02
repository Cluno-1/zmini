<template>
	<view class="layout">
		<!-- 实时预览区 -->
		<view class="flex-col" style="background-color: gray;width: 97vw;height: 30vh;">
			<ZListCard>
				<template #title>ZInput 实时预览</template>
				<ZInput v-model="_.modelValue" :label="_.label" :labelWidth='_.labelWidth' :type="_.type"
					:placeholder="_.placeholder" :required="_.required" :disabled="_.disabled" :textarea="_.textarea"
					:bottomLine="_.bottomLine" :rule="_.rule" :errorMessage="_.errorMessage" @change="onChange"
					@blur="onBlur" @click="onClick" />
			</ZListCard>
		</view>

		<!-- 配置区 -->
		<ZListCard>
			<template #title>配置</template>

			<!-- 双向绑定值 -->
			<ZInput v-model="_.modelValue" label="值" bottomLine placeholder="请输入任意字符" />

			<!-- 左侧标题 -->
			<ZInput v-model="_.label" label="label" bottomLine placeholder="请输入左侧标题" />

			<!-- label宽度 -->
			<ZInput v-model="_.labelWidth" label="labelWidth" bottomLine placeholder="labelWidth label宽度" />

			<!-- 输入类型 -->
			<ZInput v-model="_.type" label="type" bottomLine placeholder="text/number/idcard/digit/password" />

			<!-- 占位文本 -->
			<ZInput v-model="_.placeholder" label="占位" bottomLine placeholder="请输入占位文本" />

			<!-- 校验字段名（配合 required 自动生成规则） -->
			<ZInput v-model="_.rule" label="rule" bottomLine placeholder="对应 up-form rules 的字段名" />

			<!-- 手动错误提示 -->
			<ZInput v-model="_.errorMessage" label="错误提示" bottomLine placeholder="手动传入底部错误提示" />
			<u-form>
				<!-- 多行文本域 -->
				<u-form-item label="textarea">
					<ZSwitch v-model="_.textarea" :useTernary="false" />
				</u-form-item>

				<!-- 必填红星 -->
				<u-form-item label="required ">
					<ZSwitch v-model="_.required" :useTernary="false" />
				</u-form-item>

				<!-- 禁用态 -->
				<u-form-item label="disabled">
					<ZSwitch v-model="_.disabled" :useTernary="false" />
				</u-form-item>

				<!-- 底部分割线 -->
				<u-form-item label="bottomLine">
					<ZSwitch v-model="_.bottomLine" :useTernary="false" />
				</u-form-item>
			</u-form>
		</ZListCard>
	</view>
</template>

<script setup>
	import {
		onMounted,
		reactive
	} from 'vue'

	const _ = reactive({
		modelValue: 'Hello ZInput',
		label: '用户昵称',
		labelWidth: '100px',
		type: 'text',
		placeholder: '请输入用户昵称',
		required: true,
		disabled: false,
		textarea: false,
		bottomLine: false,
		rule: 'nickname',
		errorMessage: ''
	})

	onMounted(() => {
		console.log(_.modelValue, 'noMounted')
	})
	// 事件回调，打日志即可
	const onChange = (val) => console.log('change:', val)
	const onBlur = (val) => console.log('blur:', val)
	const onClick = (val) => console.log('click:', val)
</script>