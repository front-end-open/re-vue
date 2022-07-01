/*
 * @LastEditTime: 2022-07-01 23:30:56
 * @Description: 响应式系统完成版-第一版
 * @Date: 2022-06-28 23:36:34
 * @Author: wangshan
 * @LastEditors: wangshan
 */
/**
 * 这一版本，旨在从新设置代理对象源键对应副作用函数.而不是对不存在的依赖，也会触发存在依赖的副作用键，这其中比较明显的问题就是，对应关系的错误.
 * 从新设计收集副作用函数的桶
 *
 */

// 建立键与副作用函数的关系
// 收集副作用函数的数据结构采用，WeakMap
let activeEffect;
const bucket = new WeakMap();
const data = { text: "Reactive-version-all", hash: "hashMap" };
export function effect(fn) {
  activeEffect = fn;

  fn(); // 执行副作用,触发副作用
}
export const obj = new Proxy(data, {
  get(target, key) {
    // debugger;
    if (!activeEffect) return target[key];
    console.log("读取");

    // eslint-disable-next-line no-use-before-define
    track(target, key); // 追踪key

    return target[key];
  },
  set(target, key, newVal) {
    console.log("更新");
    target[key] = newVal;

    // eslint-disable-next-line no-use-before-define
    trigger(target, key);
    /* eslint consistent-return: "off" */
    return true;
  },
});

// 抽离get内部副作用绑定逻辑
function track(target, key) {
  let depsMap = bucket.get(target);

  if (!depsMap) {
    bucket.set(target, (depsMap = new Map()));
  }

  let deps = depsMap.get(key);

  if (!deps) {
    depsMap.set(key, (deps = new Set()));
  }
  console.log("efffect", bucket);
  deps.add(activeEffect);
}

// 抽离触发副作用函数
function trigger(target, key) {
  debugger;
  const depsMap = bucket.get(target);
  if (!depsMap) return;
  const effets = depsMap.get(key);

  /* eslint no-unused-expressions: "off" */
  effets && effets.forEach((fn) => fn());
}
