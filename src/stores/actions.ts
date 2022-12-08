import { ActionContext, ActionTree } from "vuex";
import { Mutations, MutationType } from "./mutations";
import { State } from "./state";

export enum ActionTypes {
  GetTodoItems = "GET_ITEMS",
}

type ActionAugments = Omit<ActionContext<State, State>, "commit"> & {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
};

export type Actions = {
  [ActionTypes.GetTodoItems](context: ActionAugments): void;
};

const sleep = (ms: number): Promise<TimerHandler> =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const actions: ActionTree<State, State> & Actions = {
  async [ActionTypes.GetTodoItems]({ commit }) {
    await sleep(1000);

    commit(MutationType.SetItems, [
      {
        id: Date.now(),
        text: "First TODO item",
        completed: false,
      },
    ]);
  },
};
