<template>
	<view class="tab">
		<view class="tab-border" :style="style">
			<view class="tab-item" v-for="(item, index) in tabBarList" :key="item.pagePath" @click="switchTab(item, index)" :class="currentText == item.text ? 'active' : ''">
				<image :src="item.iconPath" />
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref, reactive, onMounted, computed, nextTick } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
import { useTabbarStore } from '../../src/store/tabbar/tabbarStore';

const props = defineProps({
	text: {
		type: String,
		default: ''
	}
});
const emit = defineEmits(['onSwitch']);

const currentText = ref('');
const tabBarList = ref(
	computed(() => {
		return useTabbarStore().tabBarList;
	})
);
const style = reactive({
	width: '70%',
});

onLoad(() => {
	currentText.value = props.text;
});

const time = ref(''); //防抖

function switchTab(item, index) {
	if(currentText.value===item.text){
		return
	}
	// if (time.value) {
	// 	if (new Date().getTime() - time.value <= 1000) {
	// 		return;
	// 	}
	// }
	// time.value = new Date().getTime();
	
	currentText.value = item.text;
	let url = item.pagePath;
	// style.width = '50%';
	// style.opacity = '0.3';
	emit('onSwitch');
		uni.redirectTo({
			url
		});
	
}
</script>

<style lang="scss">
.tab {
	position: fixed;
	width: 100%;
	bottom: 0;
	left: 0;
	display: flex;
	justify-content: center;
	z-index: 9999;
	will-change: transform;
	background: #f8f8f8;
	padding-bottom: 50rpx;

	.tab-border {
		width: 50%;
		background: #1a2342;
		border-radius: 56rpx 56rpx 56rpx 56rpx;
		padding: 16rpx;
		display: flex;
		justify-content: space-between;

		overflow: hidden;
	}

	.tab-item {
		width: 80rpx;
		height: 80rpx;
		padding: 16rpx;
		background: none;
		border-radius: 50%;

		image {
			width: 48rpx;
			height: 48rpx;
		}
	}

	.active {
		background: linear-gradient(145deg, #235bf7 0%, #7796e5 100%);
	}
}
</style>
