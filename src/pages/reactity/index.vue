<!--
 * @LastEditTime: 2022-06-27 23:52:21
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

  <!-- 响应式系统基础测试 -->
  <h3>响应式系统基础版-测试</h3>
  <div id="container"></div>

  <Reactive />
</template>

<script setup>
// eslint-disable-next-line
import { onMounted, ref, nextTick, onUnmounted } from "vue";

import { createProxy, noDone } from "./utils/mixin";
import { handleError, effect, obj } from "../../utils/helps";

import Reactive from "./Reactivity.vue";
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
  //   createProxy();
  // 注册错误处理器
  handleError.regisErrorhandle((err) => {
    console.log(err);
  });

  // 任务分配
  //   handleError.createtask(createProxy);
  //   handleError.createtask(noDone);

  //   debugger;
  // 响应式系统-基础版测试
  effect(); // -> 读取
  //   赋值更新
  // 此表达式触发触发setter，同样会触发读取操作
  obj.text = "update text property of vlaue == 'test'";
});
onUnmounted(() => console.log("组件卸载"));
</script>

<style scoped></style>
