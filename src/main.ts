import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";
import { thisMonth, thisWeek, today } from "./mocks";
import { router } from "./router";

function delay() {
  return new Promise<void>((resolve, reject) => {
    setTimeout(resolve, 2000);
  });
}

// @ts-ignore
axios.get = async (url: string) => {
  if (url === "/posts") {
    await delay();
    return Promise.resolve({
      data: [today, thisWeek, thisMonth],
    });
  }
};

const app = createApp(App);
app.use(router);
app.mount("#app");
