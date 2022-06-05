<!--
 * @LastEditTime: 2022-05-30 00:37:30
 * @Description: 
 * @Date: 2022-05-30 00:17:16
 * @Author: wangshan
 * @LastEditors: wangshan
-->
<template>
  <div>
    <h3>advance</h3>

    <div>count:{{ count }}</div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  data() {
    return {};
  },
  setup(p) {
    const count = ref(0);
    console.log(count);
    return {
      count,
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped></style>
