<template>
  <div class="navbar">
    <div class="navbar-end">
      <div class="buttons">
        <button class="button" @click="show">
          Sign Up
        </button>
        <router-link class="button" to="/posts/new">New Post</router-link>
      </div>
    </div>
  </div>

  <teleport to="#modal">
    <signup />
  </teleport>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useModal } from "../useModal"
import Signup from "./Signup.vue";

export default defineComponent({
  components: {
    Signup,
  },
  setup() {
    const modal = useModal()

    return {
      show: () => {
        modal.showModal()
      }
    }
  }
})
</script>
