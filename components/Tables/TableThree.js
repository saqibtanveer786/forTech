"use client";
import AddTodo from "@components/ToDo/AddTodo";
import React, { useEffect, useState } from "react";

import { MdFileDownloadDone } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";

import { defaultTodos } from "constants/defaultTodos";
import { deleteTodo, markDone } from "lib/todosFunctions";
import Nothing from "@components/Nothing";

const TableThree = () => {
  const [todos, setTodos] = useState();

  useEffect(() => {
    const todosFromStorage = localStorage.getItem("todos");

    if (!todosFromStorage) {
      const defaultTodosToSet = JSON.stringify(defaultTodos);
      localStorage.setItem("todos", defaultTodosToSet);
      setTodos(() => defaultTodos);
      return;
    }

    const parsedTodos = JSON.parse(todosFromStorage);
    setTodos(() => parsedTodos);
  }, []);

  return (
    <div className="col-span-12 xl:col-span-4 rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-defaultsm:px-7.5 xl:pb-1 max-h-115 overflow-y-scroll">
      <div className="max-w-full overflow-x-auto">
        <AddTodo setTodos={setTodos} />
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left">
              <th className="min-w-[220px] py-4 px-4 font-medium text-black xl:pl-11">
                TODO
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black">
                Due date
              </th>
              <th className="min-w-[120px] py-4 px-4 font-medium text-black">
                Status
              </th>
              <th className="py-4 px-4 font-medium text-black">Actions</th>
            </tr>
          </thead>
          <tbody>
            {todos &&
              todos.map((todo, key) => (
                <tr key={key}>
                  <td className="border-b border-[#eee] py-5 px-4 pl-9 xl:pl-11">
                    <h5 className="font-medium text-black">{todo.title}</h5>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4">
                    <p className="text-black">{todo.dueDate}</p>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4">
                    <p
                      className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ${
                        todo.status === "Done"
                          ? "text-success bg-success"
                          : "text-warning bg-warning"
                      }`}
                    >
                      {todo.status}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4">
                    <div className="flex items-center space-x-3.5">
                      {todo.status !== "Done" ? (
                        <button
                          className="p-2 bg-gray-300 rounded-full hover:text-primary hover:bg-gray-200"
                          onClick={() => {
                            const newTodos = markDone(todos, todo.id);
                            setTodos(() => newTodos);
                          }}
                        >
                          <MdFileDownloadDone size={20} />
                        </button>
                      ) : (
                        <button
                          className="  p-2 bg-gray-300 rounded-full hover:text-primary hover:bg-gray-200"
                          onClick={() => {
                            const newTodos = deleteTodo(todos, todo.id);
                            setTodos(() => newTodos);
                          }}
                        >
                          <MdDeleteOutline size={20} />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

        {todos.length === 0 && <Nothing text={"Nothing!"} />}
      </div>
    </div>
  );
};

export default TableThree;
