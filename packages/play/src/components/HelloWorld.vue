<!--
 * @Date: 2025-08-18 20:18:45
 * @LastEditors: zld 17875477802@163.com
 * @LastEditTime: 2025-08-19 14:29:44
 * @FilePath: \zmini\packages\play\src\components\HelloWorld.vue
-->
<script setup lang="ts">
import { ZButton } from '@zmini/core';
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <div>
    <h1>{{ msg }}</h1>

    <ZButton />
  </div>

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
