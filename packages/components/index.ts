/*
 * @Date: 2025-08-18 20:12:42
 * @LastEditors: zld 17875477802@163.com
 * @LastEditTime: 2025-08-21 23:36:52
 * @FilePath: \zmini\packages\components\index.ts
 */
import { withInstall } from "@zmini/utils";
import ZButton from "./ZButton/ZButton.vue";
import ZInput from "./ZInput/ZInput.vue";

const zbutton=withInstall(ZButton);
const zinput=withInstall(ZInput);
export  {
    zbutton,
    zinput
    
}