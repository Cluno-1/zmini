<template>
  <view class="progress-container" :style="containerStyle">
    <view 
      class="progress-bar progress-bar-striped" 
      :class="{ 'progress-bar-animated': animated }"
      :style="progressStyle"
    ></view>
  </view>
</template>

<script lang="ts" setup>
import { computed, withDefaults } from 'vue'

interface Props {
  // 当前进度 (0-100)
  percent?: number
  // 进度条高度 (单位: px)
  height?: number
  // 进度条颜色
  color?: string
  // 背景颜色
  bgColor?: string
  // 是否显示条纹
  striped?: boolean
  // 是否显示动画
  animated?: boolean
  // 圆角大小 (单位: px)
  borderRadius?: number
}

const props = withDefaults(defineProps<Props>(), {
  percent: 0,
  height: 20,
  color: '#1890ff',
  bgColor: '#f5f5f5',
  striped: true,
  animated: true,
  borderRadius: 10
})

// 计算进度条样式
const progressStyle = computed(() => ({
  width: `${Math.min(100, Math.max(0, props.percent))}%`,
  backgroundColor: props.color,
  height: `${props.height}px`,
  borderRadius: `${props.borderRadius}px`
}))

// 计算容器样式
const containerStyle = computed(() => ({
  height: `${props.height}px`,
  backgroundColor: props.bgColor,
  borderRadius: `${props.borderRadius}px`
}))
</script>

<style scoped>
.progress-container {
  width: 100%;
  overflow: hidden;
}

.progress-bar {
  transition: width 0.3s ease;
}

/* 条纹效果 */
.progress-bar-striped {
  background-image: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  );
  background-size: 20px 20px;
}

/* 动画效果 */
.progress-bar-animated {
  animation: progress-bar-stripes 1s linear infinite;
}

/* 条纹动画关键帧 */
@keyframes progress-bar-stripes {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 20px 0;
  }
}
</style>