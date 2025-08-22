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
	<view class="image">
		<u-image v-for="(_, index) in (uImage as string[])" :key="_+index" :src="_" @click="handlePreview(_)"
			:width="size" :height="size" radius="5"></u-image>
		<u-upload :fileList="imgList" @afterRead="imgRead" @delete="deletePic" name="1" multiple v-if="showUpload"
			previewFullImage @clickPreview="handlePreview" :disabled='!showUpload' :maxSize='limit * 1024 * 1024'>
		</u-upload>
	</view>
</template>

<script lang="ts">
	import { computed, defineComponent, ref, watch } from "vue";
	import { imageProps, imagePropsType } from "./x-image.type";

	export default defineComponent({
		name: "XImage",
		emits: ["onClick", "update:modelValue", "onError"],
		props: imageProps,
		setup(props : imagePropsType, { emit }) {
			// 标准化图片源，确保总是返回数组   
			const normalizedSrc = ref(computed<string[]>(() : string[] => {
				if (typeof props.modelValue === "string") {
					return props.modelValue && props.modelValue.includes('http') ? [props.modelValue] : [];
				}
				return props.modelValue as unknown as string[] || [];
			}));
			const imgList = ref([])//u-upload的图片源



			// 处理 u-image 的 图片预览
			const handlePreview = (currentSrc : string | object) => {
				if (typeof currentSrc !== 'string') {
					currentSrc = currentSrc?.url
				}
				emit("onClick", currentSrc);

				if (!props.preview) return;
				// 因为后端返回的图片url为http而不是https，所以不能使用多图预览，因为会过一会会一直loading状态和黑屏，

				// if (normalizedSrc.value.length > 1) {
				//     // 多图预览
				//     uni.previewImage({
				//         urls: normalizedSrc.value,
				//         current: currentIndex,
				//     });
				// } else if (normalizedSrc.value.length === 1) {
				// 单图预览
				uni.previewImage({
					urls: [currentSrc],
					current: 0,
				});
				// }
			};

			// 新增图片 u-upload
			async function imgRead(event) {
				//检查是否有必须值
				if (!props.uploadUrl) {
					console.error('没有传入必须字段：uploadUrl')
					return
				}

				// 当设置 multiple 为 true 时, file 为数组格式，否则为对象格式
				let lists = [].concat(event.file);
				let fileListLen = imgList.value.length;
				lists.map((item) => {
					imgList.value.push({
						...item,
						status: 'uploading',
						message: '上传中'
					})
				});
				for (let i = 0; i < lists.length; i++) {
					let result;
					try {
						result = await uploadImg(lists[i], i);
					} catch (e) {
						emit("onError", e)
						return
					}

					let item = imgList.value[fileListLen];
					imgList.value.splice(fileListLen, 1, Object.assign(item, {
						status: 'success',
						message: '',
						url: result?.url,
					}));
					fileListLen++;
				}
				//双向绑定传递出去
				emit("update:modelValue", imgList.value.map((_) => {
					return _.url
				}))
			}
			// 上传图片 u-upload
			function uploadImg(item, index) {
				return new Promise((resolve, reject) => {
					uni.uploadFile({
						url: props.uploadUrl, //需要传图片的后台接口 'http://www.xingye.store:9802/prod-api/common/upload'
						filePath: item.url, // 上传图片 通过uni-app的uni-file-picker组件 函数返回
						name: 'file', //文件名字
						header: {
							'Authorization': props.authorization, //"Bearer " + uni.getStorageSync("erpToken")
						},
						formData: {
							type: Object,
							default() {
								return {
									file: item.name
								};
							}
						},
						success: res => {
							let result = JSON.parse(res.data);

							if (result.code !== 200) {
								//处理报错
								reject(result)

							} else
								resolve(result)

						},
						fail: e => {
							reject(e)
						}
					});

				});
			}
			// 删除图片 u-upload
			function deletePic(event) {
				imgList.value.splice(event.index, 1);
				//假删除 ，仅仅把该图片从前端列表删除，图片还是存储到了后端地址
			}

			// 监听 props.modelValue 的变化
			watch(
				props,
				(val) => {
					
					if (normalizedSrc.value.length) {
						imgList.value = normalizedSrc.value?.map((url : string) => ({ url, status: 'success', }));
					} else {
						imgList.value = [];
					}
				},
				{ immediate: true }
			);

			return {
				handlePreview,
				normalizedSrc,
				imgList,
				imgRead,
				deletePic,
				uImage: computed(() => {// 仅仅为u-image的图片源
					if (!props.showUpload) {
						return normalizedSrc.value
					} else {
						return []
					}
				}),

			};
		},
	});
</script>

<style scoped lang="scss">
	.image {
		display: flex;
		max-width: 90vw;
		flex-wrap: wrap;
		gap: 10rpx;
	}
</style>