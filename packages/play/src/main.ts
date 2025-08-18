/*
 * @Date: 2025-08-18 20:18:45
 * @LastEditors: zld 17875477802@163.com
 * @LastEditTime: 2025-08-18 22:25:17
 * @FilePath: \zmini\packages\play\src\main.ts
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import zmini from '@zmini/core'
createApp(App).use(zmini).mount('#app')
