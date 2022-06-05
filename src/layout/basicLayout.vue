<!--
 * @LastEditTime: 2022-06-05 23:36:57
 * @Description: 
 * @Date: 2022-05-26 23:31:11
 * @Author: wangshan
 * @LastEditors: wangshan
-->
<template>
  <div class="container">
    <div class="left">
      <router-link to="/profile">basic</router-link><br />
      <router-link to="/advance">runtime+complie</router-link> <br />
      <router-link to="/render">渲染器[render]</router-link>
    </div>
    <div class="right">
      <div class="top">{{ date }}</div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  data() {
    return {
      date: "",
      timers: null,
    };
  },
  created() {},
  beforeMount() {
    //   setTimeout(())
    this.timers = setInterval(() => {
      this.date = moment().format("YYYY-MM-DD HH:mm:ss");
    }, 1000);
  },
  beforeUnmount() {
    clearInterval(this.timers);
  },
  methods: {},
};
</script>

<style scoped>
.container {
  display: flex;
  align-items: stretch;
  height: 100%;
}
.container .left {
  position: fixed;
  top: 0;
  left: 0;
  width: 400px;
  height: 100vh;
  padding: 12px;
  box-shadow: 0 0 4px 0 #ccc;
  z-index: 1000;
}
.container .right {
  position: relative;
  flex: 1;
  padding: 24px;
  padding-left: 424px;
}
.right .top {
  position: absolute;
  width: 100%;
  padding: 24px;
  box-shadow: 0 0 4px 2px #ccc;
  /* margin: 0 -24px; */
  top: 0;
}
</style>
