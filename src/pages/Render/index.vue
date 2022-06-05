<!--
 * @LastEditTime: 2022-06-05 23:41:39
 * @Description: 
 * @Date: 2022-06-05 23:32:51
 * @Author: wangshan
 * @LastEditors: wangshan
-->
<template>
  <h3>渲染器</h3>
  <div id="container"></div>
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
