import editBtn from "../../img/edit.svg";
import { toDo_database, saveToLocalStorage } from "./_database.js";

export const ui_toDo_element = function (
  title,
  description,
  dueDate,
  priority,
  projectName,
  createdAt
) {
  const todo_element = document.createElement("div");
  todo_element.classList.add("toDo_element");

  const toDo_title = document.createElement("h3");
  toDo_title.textContent = title;

  const toDo_description = document.createElement("p");
  toDo_description.textContent = description;

  const toDo_dueDate = document.createElement("p");
  toDo_dueDate.textContent = dueDate;

  const toDo_priority = document.createElement("p");
  toDo_priority.textContent = priority;

  const toDo_edit_btn = document.createElement("button");
  const toDo_edit_btn_img = document.createElement("img");
  toDo_edit_btn_img.classList.add("toDo_edit_btn_img");
  toDo_edit_btn_img.src = editBtn;

  // TODO: Hook your edit logic here
  toDo_edit_btn.addEventListener("click", () => {
    console.log("Edit clicked for:", title);
  });

  toDo_edit_btn.append(toDo_edit_btn_img);

  const cancelBtn = document.createElement("button");
  cancelBtn.classList.add("cancel_btn");
  cancelBtn.textContent = "X";
  cancelBtn.type = "button";
  cancelBtn.addEventListener("click", function () {
    todo_element.remove();
    if (
      projectName &&
      toDo_database.projects[projectName] &&
      createdAt !== undefined
    ) {
      toDo_database.projects[projectName].todos = toDo_database.projects[
        projectName
      ].todos.filter(todo => todo.createdAt !== createdAt);
      saveToLocalStorage(); // if using localStorage
    }
  });

  todo_element.append(
    toDo_title,
    toDo_description,
    toDo_dueDate,
    toDo_priority,
    toDo_edit_btn,
    cancelBtn
  );

  return todo_element;
};
