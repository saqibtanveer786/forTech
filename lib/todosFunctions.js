export function markDone(todos, id) {
  //update todo in array
  const newTodos = todos.map((todo) => {
    if (todo.id === id) todo.status = "Done";
    return todo;
  });

  //update todo in localStorage
  localStorage.setItem("todos", JSON.stringify(newTodos));

  return newTodos;
}

export function deleteTodo(todos, id) {
  //delete todo from array
  const newTodos = todos.filter((todo) => todo.id !== id);

  //delete todo from localStorage
  localStorage.setItem("todos", JSON.stringify(newTodos));

  return newTodos;
}
