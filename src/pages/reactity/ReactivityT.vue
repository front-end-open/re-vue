<!--
 * @LastEditTime: 2022-06-30 00:15:33
 * @Description: 
 * @Date: 2022-06-29 01:07:36
 * @Author: wangshan
 * @LastEditors: wangshan
-->
<template>
  <h3>响应式系统第三版</h3>
  <div id="cont"></div>
</template>

<script setup>
import { onMounted } from "vue";

import { effect, obj } from "../../utils/ReactiveVersionT.js";

onMounted(() => {
  console.log("reactivity------------------------3");

  effect(() => {
    console.log("副作用更新");
    document.getElementById("cont").innerHTML = obj.text;
  });

  setTimeout(() => {
    obj.noExit = "add new Key";
  }, 100);

  setTimeout(() => {
    document.getElementById("cont").innerHTML = obj.noExit;
  }, 200);

  setTimeout(() => {
    // eslint-disable-next-line no-unused-expressions
    obj.test = "hello";
  });

  // Map, WeakMap区别探究
  const foo = new WeakMap();
  const bar = new Map();
  let z = null;
  // eslint-disable-next-line wrap-iife
  (function q() {
    const a = { a: 1 };
    const b = { b: 1 };
    z = a; // 这里的强引用导致IIFE执行完毕，a没有被回收，weakmap内部的a弱引用依然可以访问内部的键.

    foo.set(a, 1);
    bar.set(b, 2);

    console.log("key-map", foo.has(a), bar.has(b));
  })();

  console.log("map-weakmap", foo.has(z), bar.keys(), z, foo);
});
</script>

<style scoped lang="less"></style>
