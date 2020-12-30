import { Action } from "./actions";

export interface TodosState {
  todos: string[];
}

const initialState = {
  todos: [],
};

const reducer = (state: TodosState = initialState, action: Action) => {
  switch (action.type) {
    case "ADD_TODO":
      return { ...state, todos: [action.payload, ...state.todos] };
    default:
      return state;
  }
};

export default reducer;
