<template>
  <div class="modal" :style="style">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div id="modal"></div>
    </div>
    <button class="modal-close is-large" @click="hide"></button>
  </div>

  <section class="section">
    <div class="container">
      <form-input
        v-model="username"
        name="Username"
        type="text"
        error="There is an error"
      />
      {{ username }}
      <navbar />
      <router-view />
    </div>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";

import { useModal } from "./useModal";

import FormInput from "./components/FormInput.vue";
import Navbar from "./components/Navbar.vue";

export default defineComponent({
  name: "App",
  components: { FormInput, Navbar },

  setup() {
    const modal = useModal();
    const username = ref("username");

    const style = computed(() => {
      return {
        display: modal.show.value ? "block" : "none",
      };
    });
    return {
      hide: () => {
        modal.hideModal();
      },
      style,
      username,
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
