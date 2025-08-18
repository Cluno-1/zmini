/*
 * @Date: 2025-08-18 20:14:10
 * @LastEditors: zld 17875477802@163.com
 * @LastEditTime: 2025-08-18 21:11:34
 * @FilePath: \zmini\packages\core\index.ts
 */
import { makeInstaller } from "@zmini/utils";
import components from "./components";

const installer = makeInstaller(components);

export * from "@zmini/components";
export default installer;
