import React from "react";
import ToDo from "./ToDo";

const ToDoList = ({ todos = [], removeTodo }) => {
  if (todos.length === 0) {
    return <p>No Data Available!</p>;
  }

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <ToDo id={todo.id} title={todo.title} removeTodo={removeTodo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
