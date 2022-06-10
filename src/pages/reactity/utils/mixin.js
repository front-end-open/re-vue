/*
 * @LastEditTime: 2022-06-11 01:18:17
 * @Description:
 * @Date: 2022-06-11 00:15:53
 * @Author: wangshan
 * @LastEditors: wangshan
 */
export function createProxy() {
  // 基本示列
  const hander = {
    get(obj, props) {
      return props in obj ? obj[props] : 37;
    },
  };
  const p = new Proxy({}, hander);
  console.log(p.a);
}
export function noDone() {
  // 代理转发
  const target = {};
  const p = new Proxy(target, {
    get(obj, prop) {
      console.log("访问目标target的属性");
      return obj[prop];
    },
    set(obj, prop, value) {
      if (typeof value !== "string") {
        throw new Error("value is not invalid ");
      }

      console.log(`为target属性:${prop}添加值:${value}`);
      obj[prop] = value;
      return true;
    },
  });
  console.log(p.a);
  p.b = "add new value"; // setstring
  p.z = 2; // setnumber
  console.log("target", target);
}
