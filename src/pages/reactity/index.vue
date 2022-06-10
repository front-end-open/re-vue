<!--
 * @LastEditTime: 2022-06-11 00:52:42
 * @Description:  响应式系统
 * @Date: 2022-06-11 00:00:04
 * @Author: wangshan
 * @LastEditors: wangshan
-->
<template>
  <h3>响应式系统</h3>
  <p>讨论响应式系统首相从实现一个响应式数据开始</p>
  <p>
    理解响应式数据的概念：如果一个响应式数据发生更新，那么与之关联作用的对象也会发生更新。这便是响应式系统比较通俗的解释。
  </p>
  <p>开始实现响应式数据</p>
  <span>no-reactity-{{ a }}</span>
  <p>reactity-{{ b }}</p>
  <button @click="updateA">add</button>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { createProxy, noDone } from "./utils/mixin";
// data
// 基本示列
let a = 1; // no-reactity
const b = ref(1); // reactity

// methods
function updateA() {
  a++;
  b.value++;
}

// life-cycle
onMounted(() => {
  console.log("组件已经挂载");
  createProxy();

  noDone();
});
</script>

<style scoped></style>
