import React, { useState } from "react";
import "./App.css";
import { Todos, Todo } from "./components/Todo";
import { TodoForm } from "./components/TodoForm";

function App() {
  const initialTodos: Todos[] = [
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Learn Git", completed: true },
    { id: 3, text: "Learn Node", completed: false },
  ];
  const [todos, setTodos] = useState(initialTodos);

  const completeTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].completed = true;
    setTodos(newTodos);
  };
  const removeTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  const addTodo = (todo: Todos) => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={todo.id}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        {/* <TodoForm addTodo={addTodo} /> */}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
