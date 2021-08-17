import React, { Component } from "react";
import uuid from "uuid/dist/v4";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
class App extends Component {
  state = {
    items: [
      { id: 1, title: "abcd" },
      { id: 2, title: "xyz" },
    ],
    id: uuid(),
    item: "",
    editItem: false,
  };
  handleChange = (e) => {
    console.log("handleChange");
  };
  handleSubmit = (e) => {
    console.log("handleSubmit");
  };
  clearList = () => {
    console.log("clearlist");
  };
  handleDelete = (id) => {
    console.log(`handle delete ${id}`);
  };
  handleEdit = (id) => {
    console.log(`handle edit ${id}`);
  };
  render() {
    console.log(this.state);
    return (
      <div className="container border border-dark">
        <div className="row border border-primary">
          <div className="col-10 mx-auto col-md-8 mt-5 border border-warning">
            <h3 className="text-center text-capitalize">Todo input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList
              items={this.state.items}
              handleDelete={this.handleDelete}
              handleEdit={this.handleDelete}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
