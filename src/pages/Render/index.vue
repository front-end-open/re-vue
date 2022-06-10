<!--
 * @LastEditTime: 2022-06-10 00:57:39
 * @Description: 
 * @Date: 2022-06-05 23:32:51
 * @Author: wangshan
 * @LastEditors: wangshan
-->
<template>
  <h3>渲染器</h3>
  <div class="box"></div>
  <h5>虚拟dom对象描述法-节点描述</h5>
  <div id="container"></div>
  <h3>虚拟dom描述法-组件描述</h3>
  <p>
    对于组件的描述，需要明白组件的本质。其实组件本质还是一群dom元素的封装,
    而这些dom元素就是组件需要描述的内容
  </p>
  <p>对于组件的描述可以采用函数来描述，函数的返回值，还是返回js对象，使用对象来描述一群dom</p>
</template>

<script>
import { rendererPlus } from "../../utils/helps";

export default {
  data() {
    return {
      vnode: {
        tag: "div",
        props: {
          onClick() {
            alert("ok");
          },
          class: "content",
        },
        children: "chick me",
      },
    };
  },
  beforeMount() {
    // rendererPlus(this.vnode, document.getElementById("container"));
  },
  mounted() {
    rendererPlus(this.vnode, document.getElementById("container"));
  },
  methods: {},
};
</script>

<style scoped>
.content {
  width: 400px;
  height: auto;
  background-color: #ccc;
}
</style>

<!-- <style lang="less" scoped>
.container {
  width: 100%;
  min-height: 100vh;
}
</style> -->
