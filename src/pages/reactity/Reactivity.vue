<!--
 * @LastEditTime: 2022-06-30 00:18:23
 * @Description:  响应式系统-version2
 * @Date: 2022-06-27 23:46:25
 * @Author: wangshan
 * @LastEditors: wangshan
-->
<template>
  <h2>响应式系统第二版</h2>
  <div id="contain"></div>
</template>

<script setup>
import { onMounted, nextTick } from "vue";

import { effect, obj } from "../../utils/reactivity";

onMounted(() => {
  console.log("reactivity----------------------2222");

  effect(() => {
    console.log("更新11111");
    document.getElementById("contain").innerHTML = "helo";
  });

  // 更新source
  setTimeout(() => {
    obj.noExits = "hello"; // 不存在的effect同样触发了obj.text的更新,不符合设定. 预期应该是触发指定属性的更新操作.
  }, 200);
});
</script>

<style scoped lang="less"></style>
