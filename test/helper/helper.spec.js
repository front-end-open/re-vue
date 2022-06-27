/*
 * @LastEditTime: 2022-06-27 19:14:02
 * @Description:
 * @Date: 2022-06-27 17:06:49
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import { sum } from "../../src/utils/helps.js";
// import { sum } from "/@/utils/helps.js";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
