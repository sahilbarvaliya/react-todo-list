import React, { Component } from "react";
import TodoItem from "./TodoItem";
export default class TodoList extends Component {
  render() {
    const { items, handleDelete, clearList, handleEdit } = this.props;
    return (
      <ul className="list-group my-5 border border-dark">
        <h3 className="text-capitalize text-center">Todo list</h3>
        {items.map((item) => {
          return (
            <TodoItem
              key={item.id}
              title={item.title}
              handleDelete={() => handleDelete(item.id)}
              handleEdit={() => handleEdit(item.id)}
            />
          );
        })}
        <button
          type="button"
          className="btn btn-danger btn-block mt-5"
          onClick={clearList}
        >
          Clear List
        </button>
      </ul>
    );
  }
}
