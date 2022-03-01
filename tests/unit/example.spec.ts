import { mount } from "@vue/test-utils";

import Timeline from "../../src/components/Timeline.vue";
import { today } from "../../src/mocks";

describe("Timeline", () => {
  it("renders today post by default", () => {
    const wrapper = mount(Timeline);

    expect(wrapper.html()).toContain(today.created.format("Do MMM"));
  });
});
