import React, { Component } from 'react'
import uuid from "uuid"
import "bootstrap/dist/css/bootstrap.min.css"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
class App extends Component
{
  state = {
    items: [ { id: 1, title: "abcd" },
    {id:2,title:"xyz"}]
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <TodoInput />
            <TodoList />
          </div>
       </div>
      </div>
    )
  }
}

export default App;
