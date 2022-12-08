export type TodoItem = {
  id: number;
  text: string;
  completed: boolean;
};

export type State = {
  items: TodoItem[];
};

export const state: State = {
  items: [],
};
