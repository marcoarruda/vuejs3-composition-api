<template>
  <div class="field">
    <label name="name" class="label">
      {{ name }}
    </label>
    <div class="control">
      <input
        class="input"
        :type="type"
        :value="modelValue"
        @input="handleInput"
      />
      <p class="is-danger help">{{ error }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "text",
    },
    modelValue: {
      type: String,
      required: true,
    },
    error: {
      type: String,
    },
  },
  setup(props, ctx) {
    const handleInput = (e: Event) => {
      ctx.emit("update:modelValue", (e.target as HTMLInputElement).value);
    };

    return {
      handleInput,
    };
  },
});
</script>
