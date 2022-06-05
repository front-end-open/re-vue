<!--
 * @LastEditTime: 2022-06-01 00:53:39
 * @Description: 
 * @Date: 2022-05-26 23:37:13
 * @Author: wangshan
 * @LastEditors: wangshan
-->
<template>
  <h3>递归列表</h3>
  <p>虚拟dom构造</p>
  <div id="list"></div>
  <div>
    此时的render函数通过接收dom列表对象，作为运行参数，最终渲染提供的节点。就是纯运行时的操作
  </div>

  <div>后续的template类html模板，也即是这里的额虚拟dom对象的简化版。</div>
</template>

<script>
import { ref } from "vue";
import { Render } from "../../utils/helps"; // 渲染函数
import moment from "moment";
export default {
  name: "Basic",
  data() {
    return {
      listdom: {
        tag: "ul",
        children: [
          // 构造virtual-DOM树
          {
            tag: "li",
            children: [
              {
                tag: "span",
                children: "apple",
              },
              {
                tag: "span",
                children: "$7",
              },
            ],
          },
          {
            tag: "li",
            children: "banner",
          },
          {
            tag: "li",
            children: "fruit",
          },
        ],
      },
    };
  },
  setup(p) {
    const count = ref(0);
    console.log(count);
    return {
      count,
    };
  },
  mounted() {
    Render(this.listdom, document.getElementById("list"));
  },
  methods: {
    Render,
  },
};
</script>

<style scoped lang="less"></style>
