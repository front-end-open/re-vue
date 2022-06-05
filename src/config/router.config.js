/*
 * @LastEditTime: 2022-06-05 23:35:57
 * @Description:
 * @Date: 2022-05-26 23:28:45
 * @Author: wangshan
 * @LastEditors: wangshan
 */

import BasicLayout from "../layout/basicLayout";

export const routes = [
  {
    path: "/",
    component: BasicLayout,
    redirect: "profile",
    children: [
      {
        path: "profile",
        component: () => import(/* webpackChunkName: "Basic" */ "../pages/basic/index.vue"),
      },
      {
        path: "advance",
        component: () => import(/* webpackChunkName: "Advance" */ "../pages/advance/index.vue"),
      },
      {
        path: "render",
        component: () => import(/* webpackChunkName: "Advance" */ "../pages/Render"),
      },
    ],
  },
];
