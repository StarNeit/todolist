import { GetterTree } from "vuex";
import { State, TodoItem } from "./state";

export type Getters = {
  completedItems(state: State): TodoItem[];
  notCompletedItems(state: State): TodoItem[];
};

export const getters: GetterTree<State, State> & Getters = {
  completedItems(state) {
    return state.items.filter((item) => item.completed);
  },
  notCompletedItems(state) {
    return state.items.filter((item) => !item.completed);
  },
};
