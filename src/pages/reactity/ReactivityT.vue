<!--
 * @LastEditTime: 2022-06-29 01:27:56
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
import { onMounted, nextTick } from "vue";

import { effect, obj } from "../../utils/ReactiveVersionT.js";

onMounted(() => {
  console.log("reactivity------------------------3");

  effect(() => {
    document.getElementById("cont").innerHTML = obj.text;
  });

  setTimeout(() => {
    console.log("更新key");
    obj.noExit = "add new Key";
  }, 100);

  //   setTimeout(() => {
  //     obj.noExit = "add new Key";
  //   }, 200);

  setTimeout(() => {
    document.getElementById("cont").innerHTML = obj.noExit;
  }, 200);
});
</script>

<style scoped lang="less"></style>
