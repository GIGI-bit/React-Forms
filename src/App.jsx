import { Component, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

class App extends Component {
  state = {
    todos: [],
  };

  addTodo = (e) => {
    this.setState((prevState) => ({
      todos: [...prevState.todos, e],
    }));
  };
  removeTodo = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== id),
    }));
  };

  render() {
    return (
      <div>
        <Form addTodo={this.addTodo} />
        <ToDoList todos={this.state.todos} removeTodo={this.removeTodo} />
      </div>
    );
  }
}

export default App;
