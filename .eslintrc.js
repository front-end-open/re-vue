/*
 * @LastEditTime: 2022-05-25 01:05:25
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
  },
};
