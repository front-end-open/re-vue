## 响应式系统副作用函数边界处理

> 基础版本的响应式系统基于 es2015 的 Proxy, 目前的副作用函数还是硬编码的方式存在于代码当中。现在着手将硬编码函数，设计为可以任意命名模式，或者是匿名函数。避免错误调用引起的报错。

## 注册副作用函数机制实现.

1. 提供全局变量，保存副作用函数
2. 声明注册副作用函数的工具函数
