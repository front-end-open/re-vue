/*
 * @LastEditTime: 2022-06-28 23:36:05
 * @Description: 响应式系统-第二版
 * @Date: 2022-06-27 23:27:32
 * @Author: wangshan
 * @LastEditors: wangshan
 */

// 注册副作用函数
let activeEffect = null;
// 响应式系统core
const data = { text: "hello world-version2" }; // 响应对象源
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

/**
 *
 * 现在的响应式系统可以匿名注册副作用函数，导致了副作用函数的丢失.
 * 缺陷是: 如果注册不存在的键时，会触发同一个更新操作. 为避免此情况需要单独为每一个代理对象设置监听的副作用.
 *
 */
