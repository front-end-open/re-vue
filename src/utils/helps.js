/*
 * @LastEditTime: 2022-07-02 01:27:10
 * @Description:
 * @Date: 2022-05-27 00:01:12
 * @Author: wangshan
 * @LastEditors: wangshan
 */

// 运行时render
export function Render(obj, root) {
  const el = document.createElement(obj.tag);
  if (typeof obj.children === "string") {
    const text = document.createTextNode(obj.children);
    el.appendChild(text);
  } else if (obj.children) {
    obj.children.forEach((child) => Render(child, el));
  }
  root.appendChild(el);
}

// 自定义渲染器version2
export function rendererPlus(vnode, container) {
  const el = document.createElement(vnode.tag);

  // 处理属性
  /* eslintno-restricted-syntax: off */
  for (const key in vnode.props) {
    if (/^on/.test(key)) {
      el.addEventListener(key.substr(2).toLocaleLowerCase(), vnode.props[key]);
    } else {
      el.setAttribute(key, vnode.props[key]);
    }
  }

  // 处理节点chhildren
  if (typeof vnode.children === "string") {
    el.appendChild(document.createTextNode(vnode.children));
  } else if (Array.isArray(vnode.children)) {
    vnode.children.forEach((child) => rendererPlus(child, el));
  }

  container.appendChild(el);
}

// error-handle
export const handleError = {
  handleError: null,
  createtask(fn) {
    // debugger;
    this.callErrorHadle(fn);
  },
  regisErrorhandle(errorCallback) {
    this.handleError = errorCallback;
  },
  callErrorHadle(fn) {
    try {
      return fn && fn();
    } catch (error) {
      return this.handleError(error);
    }
  },
};
// 响应式系统实现-初级
// 响应式关联副作用函数,触发目标对象的读取操作
// 目标对象的属性更新操作，触发副作用函数的更新操作
// 触发更新的副作用函数
const bucket = new Set();
const data = { text: "hello world" };
export const obj = new Proxy(data, {
  get(target, key) {
    bucket.add(effect);
    // console.log("preSet", bucket);
    return target[key];
  },
  set(target, key, newVal) {
    target[key] = newVal;

    bucket.forEach((fn) => {
      fn();
    });
    return true;
  },
});

// 硬编码显示副作用函数
export function effect() {
  document.getElementById("container").innerHTML = obj.text;
}

// 供测试使用
export function sum(a, b) {
  return a + b;
}
