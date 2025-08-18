/*
 * @Author: zld 17875477802@163.com
 * @Date: 2025-08-18 16:46:05
 * @LastEditors: zld 17875477802@163.com
 * @LastEditTime: 2025-08-18 17:15:51
 * @FilePath: \zmini\packages\utils\intall.ts
 * @Description: 
 * 
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved. 
 */
import type { App, Component, Plugin } from "vue";

/** 标识符：防止重复安装 */
const INSTALLED_KEY = Symbol("INSTALLED_KEY");

/** 单个组件“插件化” */
export function withInstall<T extends Component>(comp: T) {
  (comp as any).install = (app: App) => {
    const name = comp.name || (comp as any).__name; /* 兼容 <script setup> */
    if (name) app.component(name, comp);
  };
  return comp as T & { install(app: App): void };
}

/** 把一堆插件打包成一个插件 */
export function makeInstaller(pieces: Plugin[]) {
  const install = (app: App, options?: any) => {
    if ((app as any)[INSTALLED_KEY]) return;
    (app as any)[INSTALLED_KEY] = true;

    // 支持传入全局配置
    if (options) {
      app.provide("MY_LIB_CONFIG", options);
    }

    pieces.forEach((p) => app.use(p));
  };

  return { install };
}
