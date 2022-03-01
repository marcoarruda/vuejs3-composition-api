import { reactive, readonly } from "vue";
import { Post } from "../src/mocks";

interface State {
  posts: PostsState;
}

interface PostsState {
  ids: string[]; // [1, 2, 3, 4]

  all: Map<string, Post>;

  loaded: boolean;
}

class Store {
  private state: State;

  constructor(initial: State) {
    this.state = reactive(initial);
  }

  getState() {
    return readonly(this.state);
  }
}

const store = new Store({
  posts: {
    all: new Map(),
    ids: [],
    loaded: false,
  },
});

store.getState().posts.loaded
