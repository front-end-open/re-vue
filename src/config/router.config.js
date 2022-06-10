/*
 * @LastEditTime: 2022-06-11 00:01:59
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
      {
        path: "flex",
        component: () => import(/* webpackChunkName: "Flex" */ "../pages/flexbox"),
      },
      {
        path: "reactive",
        component: () => import(/* webpackChunkName: "Reactity" */ "../pages/reactity"),
      },
    ],
  },
];
