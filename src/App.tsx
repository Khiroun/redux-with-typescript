import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./actions";

import NewTodoInput from "./NewTodoInput";
import { TodosState } from "./todosReducer";
function App() {
  const todos = useSelector<TodosState, TodosState["todos"]>(
    (state) => state.todos
  );
  const dispatch = useDispatch();
  const onAddTodo = (todo: string) => {
    dispatch(addTodo(todo));
  };
  return (
    <div className="App">
      <NewTodoInput addTodo={onAddTodo} />
      <hr />
      <ul>
        {todos.map((todo) => {
          return <li key={todo}>{todo}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
