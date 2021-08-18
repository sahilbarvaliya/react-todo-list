import React, { Component } from "react";
import "./todo.css";
export default class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props;
    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend bg-primary">
              <div className="input-group-text bg-primary icon-outline text-white">
                <i className="fas fa-book"></i>
              </div>
            </div>
            <input
              type="text"
              className="form-control text-capitalize"
              placeholder="Add Todo Items"
              value={item}
              onChange={handleChange}
            />
          </div>
          <div className="d-grid col-12 mx-auto">
            <button
              type="submit"
              disabled={item ? false : true}
              className={
                editItem
                  ? "btn btn-block btn-success mt-2"
                  : "btn btn-block btn-primary mt-2"
              }
            >
              {editItem ? "Edit Item" : "Add Item"}
            </button>
          </div>
        </form>
      </div>
    );
  }
}
