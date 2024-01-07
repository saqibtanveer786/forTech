"use client";
import React, { useRef } from "react";
import { v4 as uuidv4 } from "uuid";

export default function AddTodo({ setTodos }) {
  const title = useRef();
  const dueDate = useRef();

  async function addTodo() {
    let todo = {};
    todo.id = uuidv4();
    todo.title = title.current.value;
    todo.dueDate = dueDate.current.value;
    todo.status = "Pending";

    let todos = localStorage.getItem("todos");

    if (!todos) {
      todos = [todo];
      localStorage.setItem("todos", JSON.stringify(todos));
      return;
    }

    todos = await JSON.parse(todos);
    todos.push(todo);

    const todosToStore = JSON.stringify(todos);
    localStorage.setItem("todos", todosToStore);

    const todosToSet = JSON.parse(localStorage.getItem("todos"));
    setTodos(() => todosToSet);

    title.current.value = "";
    dueDate.current.value = "";
  }

  return (
    <div className="add-todo flex gap-2 my-2">
      <input
        ref={title}
        type="text"
        className="border px-2 py-1 w-full rounded-md outline-none focus:border-black"
      />
      <input
        ref={dueDate}
        type="text"
        className="border px-2 py-1 w-[60%] rounded-md outline-none focus:border-black"
      />
      <button
        className="text-primary px-2 bg-gray-200 rounded-md hover:bg-gray-100"
        onClick={addTodo}
      >
        Add
      </button>
    </div>
  );
}
