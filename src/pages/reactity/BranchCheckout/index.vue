<!--
 * @LastEditTime: 2022-07-01 23:33:50
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
import { effect, obj } from "@/utils/ReactiveVersionT";

onMounted(() => {
  console.log("reactity--------------33333333333333");
  effect(() => {
    console.log("hello");
    document.getElementById("contss").innerHTML = obj.hash ? obj.zzz : "not";
  });
  obj.zzz = "hello"; // 遗留依赖，导致依赖hash的副作用函数触发，导致不必要的视图更新
  obj.qq = "ssr"; // 不触发更新
});
/**
 * key1
 *     --------> effectFn
 * key2
 */
</script>

<style scoped lang="less"></style>
