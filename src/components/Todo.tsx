import React from "react";

export interface Todos {
  id: number;
  text: string;
  completed: boolean;
}

interface Props {
  todo: Todos;
  index: number;
  completeTodo: (index: number) => void;
  removeTodo: (index: number) => void;
}

export const Todo: React.FunctionComponent<Props> = ({
  todo,
  index,
  completeTodo,
  removeTodo,
}) => {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.completed ? "line-through" : "" }}
    >
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>

        <button onClick={() => removeTodo(index)}>x</button>
      </div>
    </div>
  );
};
