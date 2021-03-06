import { nextTick } from "vue";
import { flushPromises, mount } from "@vue/test-utils";

import Timeline from "../../src/components/Timeline.vue";
import { today, thisWeek, thisMonth } from "../../src/mocks";

jest.mock('axios', () => ({
  get: (url: string) => {
    return Promise.resolve({
      data: [today, thisWeek, thisMonth]
    })
  }
}))

function mountTimeline() {
  return mount({
    components: { Timeline },
    template: `
    <suspense>
      <template #default>
        <timeline />
      </template>
      <template #fallback>
        Loading...
      </template>
    </suspense>`
  });
}

describe("Timeline", () => {
  it("renders today post by default", async () => {
    const wrapper = mountTimeline()
    await flushPromises()

    expect(wrapper.html()).toContain(today.created.format("Do MMM"));
  });

  // requestAnimationFrame(() => ...)
  it("update when the period is click", async () => {
    const wrapper = mountTimeline()
    await flushPromises()

    // click and wait for the next frame
    await wrapper.get('[data-test="This Week"]').trigger("click");
    // await nextTick();

    expect(wrapper.html()).toContain(today.created.format("Do MMM"));
    expect(wrapper.html()).toContain(thisWeek.created.format("Do MMM"));
  });

  // requestAnimationFrame(() => ...)
  it("update when the period is click", async () => {
    const wrapper = mountTimeline()
    await flushPromises()

    // click and wait for the next frame
    await wrapper.get('[data-test="This Month"]').trigger("click");
    // await nextTick();

    expect(wrapper.html()).toContain(today.created.format("Do MMM"));
    expect(wrapper.html()).toContain(thisWeek.created.format("Do MMM"));
    expect(wrapper.html()).toContain(thisMonth.created.format("Do MMM"));
  });
});
