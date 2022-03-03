<template>
  <post-writer :post="newPost" @save="save" />
</template>

<script lang="ts">
import { Post } from "../mocks";
import { defineComponent } from "vue";
import PostWriter from "./PostWriter.vue";
import moment from "moment";
import { useStore } from "../store";

export default defineComponent({
  components: {
    PostWriter,
  },

  setup() {
    const newPost: Post = {
      id: "-1",
      title: "Enter your title...",
      created: moment(),
    };

    const store = useStore();

    const save = (post: Post) => {
      store.createPost(post);
    };

    return {
      save,
      newPost,
    };
  },
});
</script>
