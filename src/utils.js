/*
 * @Author: chenYY
 * @Date: 2023-10-18 14:49:15
 * @LastEditors: chenyuanyi chenyuanyi@xuezhiyou.com
 * @LastEditTime: 2023-10-18 16:00:09
 * @FilePath: \react\react-portfolio\src\utils.js
 * @Description:工具类
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
/**
 * @description: 方便引入assets下的图片
 * @param {*} path
 * @return {*}
 */
export const getImageUrl = (path) => {
  return new URL(`/assets/${path}`, import.meta.url).href;
};
