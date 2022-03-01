<template>
  <nav class="is-primary panel">
    <span class="panel-tabs">
      <a
        v-for="(period, index) in periods"
        :key="index"
        :class="{ 'is-active': period === currentPeriod }"
        @click="setPeriod(period)"
      >
        {{ period }}
      </a>
    </span>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

type Period = "Today" | "This Week" | "This Month";

export default defineComponent({
  name: "Timeline",
  setup() {
    const periods = ["Today", "This Week", "This Month"];
    const currentPeriod = ref<Period>("Today");

    const setPeriod = (period: Period) => {
      currentPeriod.value = period;
    };

    return { periods, currentPeriod, setPeriod };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
