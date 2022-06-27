/*
 * @LastEditTime: 2022-06-27 16:45:25
 * @Description:
 * @Date: 2022-05-25 00:55:34
 * @Author: wangshan
 * @LastEditors: wangshan
 */
//@vue/cli-plugin-babel/preset提供对babel和兴库和babel-loader的预设
module.exports = {
  presets: [
    [
      "@vue/cli-plugin-babel/preset",
      {
        targets: { node: "current" }, // 设置编译的目标环境,默认环境取决于broserlint
      },
    ],
  ],
};
