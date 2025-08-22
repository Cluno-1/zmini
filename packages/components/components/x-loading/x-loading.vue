<template>
	<view class="load-background" v-if="show">
		<view>
			<image class="image" :src="`${preImgUrl}/global/loading/blue-xingye-logo.png`"></image>
		</view>
		<view class="progress">
			<u-line-progress :percentage="progress" :showText="false" :active-color="activeColor" :height="10">...</u-line-progress>
		</view>
	</view>
</template>

<script setup lang="ts">
import { onReady } from '@dcloudio/uni-app';
import { onLoad } from '@dcloudio/uni-app';
import { ref } from 'vue';
import { preImgUrl } from '../../utils/img';

const props = defineProps({
	complete: {
		type: Boolean,
		required: true,
		default: false
	},
	activeColor: {
		type: String,
		required: false,
		default: '#407aa0'
	}
});

let timer = null;
const progress = ref(0);
const show = ref(true);

const t = ref(-1);

function loading() {
	t.value = Date.now();
	timer = setInterval(() => {
		let _ = progress.value;
		// //console.log(progress.value,'progress')

		if (props.complete) _ += 30;
		else if (_ < 50) _ += 10;
		else if (_ >= 50 && _ < 75) _ += 6;
		else if (_ >= 75 && _ < 90) _ += 3;
		else if (_ >= 90 && _ < 95) _ += 1;

		if (_ >= 100) {
			clearInterval(timer);
			if (Date.now() - t.value < 1500) {
				setTimeout(() => {
					progress.value = 100;
					setTimeout(() => (show.value = false), 100);
				}, 500);
				return;
			}

			_ = 100;

			setTimeout(() => (show.value = false), 100);
		}
		progress.value = _;
	}, 100);
}

onReady(() => {
	loading();
});
</script>

<style scoped lang="scss">
.load-background {
	position: absolute;

	background-color: #f8f8f8;
	z-index: 9999;
	display: flex;
	gap: 15rpx;
	flex-direction: column;
	height: 100vh;
	width: 100vw;
	justify-content: center;
	align-items: center;
	.progress {
		margin-bottom: 20rpx;
		min-width: 80vw;
		min-height: 12px;
	}
}
.image {
	width: 40vw;
	height: 40vw;
}
</style>
