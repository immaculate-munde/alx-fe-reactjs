import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../TodoList";

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
    expect(screen.getByText(/Build a Todo App/i)).toBeInTheDocument();
    expect(screen.getByText(/Write Tests/i)).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText(/Add a new todo/i);
    fireEvent.change(input, { target: { value: "New Todo" } });
    fireEvent.click(screen.getByText(/Add Todo/i));
    expect(screen.getByText(/New Todo/i)).toBeInTheDocument();
  });

  test("toggles a todo", () => {
    render(<TodoList />);
    const todo = screen.getByText(/Learn React/i);
    expect(todo).not.toHaveStyle("text-decoration: line-through");
    fireEvent.click(todo);
    expect(todo).toHaveStyle("text-decoration: line-through");
  });

  test("deletes a todo", () => {
    render(<TodoList />);
    const todo = screen.getByText(/Build a Todo App/i);
    const deleteButton = todo.nextSibling;
    fireEvent.click(deleteButton);
    expect(screen.queryByText(/Build a Todo App/i)).toBeNull();
  });
});
