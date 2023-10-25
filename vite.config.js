/*
 * @Author: chenYY
 * @Date: 2023-10-16 16:41:28
 * @LastEditors: chenyuanyi chenyuanyi@xuezhiyou.com
 * @LastEditTime: 2023-10-18 14:10:13
 * @FilePath: \react\react-portfolio\vite.config.js
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  //1.0,配置css
  css: {
    modules: {
      //允许css使用驼峰式命名
      localsConvention: "camelCase",
    },
  },
});
