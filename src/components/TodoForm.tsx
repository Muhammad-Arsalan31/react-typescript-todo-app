import React, { useState } from "react";
import { Todos } from "./Todo";
interface Props {
  addTodo: (todo: Todos) => void;
}
export const TodoForm: React.FunctionComponent<Props> = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value) return;
    const todo: Todos = {
      id: Math.random(),
      text: value,
      completed: false,
    };
    addTodo(todo);
    setValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
};
