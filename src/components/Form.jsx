import React, { Component, setState, useState } from "react";
import form from "../types/FormClass";
import ToDoList from "./ToDoList";

class Form extends Component {
  state = {
    id: "",
    title: "",
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { id, title } = this.state;
    const newTodo = {
      id: id,
      title: title,
    };
    this.props.addTodo(newTodo);
    this.setState({ id: "", title: "" });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="id"
            value={this.state.id}
            onChange={this.handleChange}
            placeholder="Enter Id..."
          />
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
            placeholder="Enter Title..."
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
