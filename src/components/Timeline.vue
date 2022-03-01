<template>
  <nav class="is-primary panel">
    <span class="panel-tabs">
      <a v-for="(period, index) in periods" :key="index">
        {{ period }}
      </a>
    </span>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Timeline",
  setup() {
    const periods = ["Today", "This Week", "This Month"];

    return { periods };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
