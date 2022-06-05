<!--
 * @LastEditTime: 2022-05-26 00:05:09
 * @Description: 
 * @Date: 2022-05-25 00:55:34
 * @Author: wangshan
 * @LastEditors: wangshan
-->
<template>
  <div class="hello">{{ msg || messge }}</div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      messge: "hello",
    };
  },
  setup(props, ctx) {
    console.log(props.msg, props);
    console.log("组件示列", ctx);
    ctx.getAway();
  },
  methods: {
    goAway() {
      console.log("1111");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
