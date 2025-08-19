/*
 * @Date: 2025-08-18 20:13:15
 * @LastEditors: zld 17875477802@163.com
 * @LastEditTime: 2025-08-19 16:50:53
 * @FilePath: \zmini\packages\core\components.ts
 */
import type { Plugin } from "vue";
import {zbutton} from '@zmini/components'

export { zbutton }//单个插件

export default [zbutton] as Plugin[]//所有插件
