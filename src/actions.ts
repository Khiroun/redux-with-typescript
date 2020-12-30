export type Action = { type: "ADD_TODO"; payload: string };

export const addTodo = (todo: string): Action => {
  return {
    payload: todo,
    type: "ADD_TODO",
  };
};
