/*
 * @LastEditTime: 2022-05-26 23:51:45
 * @Description:
 * @Date: 2022-05-26 23:26:39
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import { createRouter, createWebHistory } from "vue-router";
import { routes } from "../config/router.config";

// console.log(VueRouter);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
