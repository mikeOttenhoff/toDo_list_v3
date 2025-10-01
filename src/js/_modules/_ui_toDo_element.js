export const ui_toDo_element = function (title) {
  const todo_element = document.createElement("div");
  todo_element.classList.add("toDo_element");

  const toDo_title = document.createElement("h3");
  toDo_title.textContent = title;

  todo_element.append(toDo_title);

  return todo_element;
};
