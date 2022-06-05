/*
 * @LastEditTime: 2022-05-26 23:45:18
 * @Description:
 * @Date: 2022-05-25 00:55:34
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import { createApp } from "vue";
import router from "./router/index";
import App from "./App.vue";

const app = createApp(App);
app.use(router);
app.mount("#app");
