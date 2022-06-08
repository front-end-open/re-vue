/*
 * @LastEditTime: 2022-06-08 23:42:39
 * @Description:
 * @Date: 2022-05-25 00:55:34
 * @Author: wangshan
 * @LastEditors: wangshan
 */
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/vue3-essential", "@vue/airbnb"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    quotes: "off",
    "no-trailing-spaces": "off",
    // "no-restricted-syntax": [
    // 关闭js特定的语法特性
    //   "error",
    //   {
    //     selector: "ForInStatement", //
    //     message: "不允许使用for-in声明",
    //   },
    //   {
    //     selector: "FunctionExpression",
    //     message: "不允许使用函数表达式",
    //   },
    // ],
    "no-restricted-syntax": "off", // 关闭js特定的语法特性
    "no-alert": "off", // 关闭alert特性使用
    "global-require": "off",
    "no-param-reassign": "off",
  },
};
