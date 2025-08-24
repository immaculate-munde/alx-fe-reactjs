import React from "react";
import TodoList from "./TodoList";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <img src={logo} alt="logo" />
      <TodoList />
    </div>
  );
}

export default App;
