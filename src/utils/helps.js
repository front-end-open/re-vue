/*
 * @LastEditTime: 2022-06-12 00:15:28
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
