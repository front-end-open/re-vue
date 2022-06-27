/*
 * @LastEditTime: 2022-06-27 23:44:41
 * @Description: 响应式系统-第二版
 * @Date: 2022-06-27 23:27:32
 * @Author: wangshan
 * @LastEditors: wangshan
 */

// 注册副作用函数
let activeEffect = null;
// 响应式系统core
const data = { text: "hello world" }; // 响应对象源
const bucket = new Set(); // 副作用桶-收集副作用

export const obj = new Proxy(data, {
  get(target, key) {
    if (activeEffect) {
      bucket.add(activeEffect);
    }
    console.log("preSet", bucket);
    return target[key];
  },
  set(target, key, newVal) {
    target[key] = newVal;

    bucket.forEach((fn) => {
      fn();
    });
    return true;
  },
});

/**
 *
 * @param { function } fn 作用用函数
 * @description 注册副作用函数
 */
export function effect(fn) {
  activeEffect = fn;

  fn(); // 执行副作用,触发副作用
}
