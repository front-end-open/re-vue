/*
 * @LastEditTime: 2022-06-27 00:03:22
 * @Description:
 * @Date: 2022-06-26 23:53:22
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import { shallowMount } from "@vue/test-utils";
import Basic from "@/basic/index.vue";

describe("<Basic />", () => {
  it("should render correct contents", () => {
    const wrapper = shallowMount(Basic);
    expect(wrapper.find("h3").text()).toEqual("递归列表");
  });
});
