<template>
	<view class="card-border">

		<view v-for="(item, index) in cardItems" :key="index" class="card-item">
			<view class="label">{{ item.label }}</view>
			<!-- 			<view class="value" v-if="item.label === '选择结算日期'">
				{{ dateTime.beginTime || '开始日期' }}
				&nbsp;&nbsp;— &nbsp;&nbsp;
				{{ dateTime.endTime || '结束日期' }}
			</view> -->
			<view class="value">
				{{ item.key === 'isDzf' ? (cardData[item.key] === 'Y' ? '是' : '否') : cardData[item.key] }}
			</view>
		</view>

		<view class="card-bottom">
			<view class="totalAmount">
				<view class="texe">余额:</view>
				<view class="num">{{ cardData.totalAmount }}</view>
			</view>
			<!-- <button v-if="(dateTime.beginTime === '' || dateTime.endTime === '')" class="download">下载结算</button> -->
			<!-- <button v-else class="download choose" @click="downloadData">下载结算</button> -->
			<button class="download choose" @click="dateTimeSelect">下载结算</button>
		</view>

	</view>
	<up-popup :show="dateTimeShow" @close="dateTimeShow = false" mode="center">
		<uni-calendar class="datetime" :range='true' :selected="dateTimeRange" :showMonth="false" @change="confirm" />
	</up-popup>
	<!-- <up-calendar :show="dateTimeShow" :mode="mode" @confirm="confirm" @close="dateTimeShow = false"></up-calendar> -->
</template>

<script setup>
	import {
		ref,
		reactive,
		defineEmits
	} from 'vue';
	const props = defineProps({
		cardData: {
			type: Object,
			default: () => ({})
		}
	});
	const emit = defineEmits(["downloadData"]);

	const dateTimeShow = ref(false);
	const mode = ref('range');

	const dateTime = reactive({
		beginTime: '',
		endTime: ''
	})
	const dateTimeRange = ref([])
	const selectionStep = ref(1)
	const confirm = (data) => {
		//console.loglog(data);
		if (selectionStep.value === 1) {
			selectionStep.value = 2
		} else {
			dateTime.beginTime = data.range.data[0]
			dateTime.endTime = data.range.data[data.range.data.length - 1]
			dateTimeShow.value = false
			selectionStep.value = 1
			downloadData()
		}
		//console.loglog(dateTime);
	};



	// 字段配置数组
	const cardItems = [{
			label: '施工单位',
			key: 'constructionUnit'
		},
		{
			label: '合同名称',
			key: 'contractName'
		},
		{
			label: '工程名称',
			key: 'projectName'
		},
		{
			label: '合同ID',
			key: 'id'
		},
		{
			label: '合同类型',
			key: 'orderType'
		},
		{
			label: '工地',
			key: 'site'
		},
		{
			label: '是否垫资方',
			key: 'isDzf'
		},
		{
			label: '付款方式',
			key: 'paymentMethod'
		}
	];

	function dateTimeSelect() {
		uni.hideKeyboard()
		dateTimeShow.value = true
	}

	function downloadData() {
		const body = {
			contractId: props.cardData.id,
			contractName: props.cardData.contractName,
			constructionUnit: props.cardData.constructionUnit,
			projectName: props.cardData.projectName,
			params: dateTime,
			isDzf: props.cardData.isDzf,
			orderType: props.cardData.orderType
		}
		emit("downloadData", body);
	}
</script>
<style scoped lang="scss">
	.card-item {
		display: flex;
		align-items: baseline;
		padding: 20rpx 0;
		border-bottom: 1px solid #f2f2f3;
		font-weight: 400;
		font-size: 28rpx;

		&:last-child {
			border-bottom: none;
		}

		.label {
			width: 32%;
			color: #101010;
			font-weight: bold;
		}

		.value {
			display: flex;
			align-items: center;
			flex: 1;
			color: #999999;
		}
	}

	.card-bottom {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-top: 32rpx;

		.totalAmount {
			display: flex;
			align-items: baseline;
			font-size: 36rpx;
			color: #E3535E;

			.num {
				margin-left: 20rpx;
			}
		}

		.download {
			background: linear-gradient(135deg, #878787 0%, #CDCDCD 100%);
			border-radius: 34rpx 34rpx 34rpx 34rpx;
			color: #fff;
			font-size: 28rpx;
			margin: 0;
		}

		.choose {
			background: linear-gradient(135deg, #235BF7 0%, #7796E5 100%);
		}
	}
</style>