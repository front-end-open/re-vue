/*
 * @LastEditTime: 2022-06-29 00:41:36
 * @Description: 响应式系统完成版-第一版
 * @Date: 2022-06-28 23:36:34
 * @Author: wangshan
 * @LastEditors: wangshan
 */
/**
 * 这一版本，旨在从新设置代理对象源键对应副作用函数.而不是对不存在的依赖，也会触发存在依赖的副作用键，这其中比较明显的问题就是，对应关系的错误.
 * 从新设计收集副作用函数的桶
 *
 */

// 建立键与副作用函数的关系
// 收集副作用函数的数据结构采用，WeakMap