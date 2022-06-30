/*
 * @LastEditTime: 2022-06-30 23:21:58
 * @Description: 响应式系统-分支切换
 * @Date: 2022-06-30 23:20:57
 * @Author: wangshan
 * @LastEditors: wangshan
 */

/*
分支切换：即是在算法表达对数据对象键的读取，触发不必要副作用函数的添加，遗留副作用函数导致不必要的更新
*/
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
  const depsMap = bucket.get(target);
  if (!depsMap) return;
  const effets = depsMap.get(key);

  /* eslint no-unused-expressions: "off" */
  effets && effets.forEach((fn) => fn());
}
