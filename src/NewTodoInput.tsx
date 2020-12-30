import React, { ChangeEvent, useState } from "react";

interface NewTodoInputProps {
  addTodo(todo: string): void;
}

const NewTodoInput: React.FC<NewTodoInputProps> = ({ addTodo }) => {
  const [todo, setTodo] = useState("");
  const updateTodo = (event: ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value);
  };
  const onAddTodoClick = () => {
    addTodo(todo);
    setTodo("");
  };
  return (
    <div>
      <input
        value={todo}
        onChange={updateTodo}
        type="text"
        name="todo"
        placeholder="TODO"
      />
      <button onClick={onAddTodoClick}>Add todo</button>
    </div>
  );
};

export default NewTodoInput;
