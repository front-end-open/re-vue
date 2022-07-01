<!--
 * @LastEditTime: 2022-07-02 01:35:59
 * @Description: 响应式系统-分支切换
 * @Date: 2022-06-30 22:37:41
 * @Author: wangshan
 * @LastEditors: wangshan
-->
<template>
  <h2>响应式系统-分支切换</h2>
  <div id="contss"></div>
</template>

<script setup>
import { onMounted } from "vue";
// import { effect, obj } from "@/utils/ReactiveVersionT";
import { effect, obj } from "@/utils/ReactivityR.js";

onMounted(() => {
  console.clear();
  console.log("reactity--------------33333333333333");

  //   effect(() => {
  //     console.log("hellosssss");
  //     document.getElementById("contss").innerHTML = obj.hash ? obj.text : "not";
  //   });
  //   obj.text = "hello"; // 遗留依赖，导致依赖hash的副作用函数触发，导致不必要的视图更新
  //   obj.qq = "ssr"; // 不触发更新
  effect(() => {
    console.log("更新ssssss");
    document.getElementById("contss").innerHTML = obj.isUpdate ? obj.text : "not";
  });
  obj.isUpdate = true;
  obj.text = "hello world";
});
/**
 * key1
 *     --------> effectFn
 * key2
 */
</script>

<style scoped lang="less"></style>
