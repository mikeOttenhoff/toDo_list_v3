import editBtn from "../../img/edit.svg";
import { toDo_database, saveToLocalStorage } from "./_database.js";
import { openEditTodo } from "./_function_toDo_edit.js";

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

  const toDo_title_arrow = document.createElement("span");
  toDo_title_arrow.classList.add("toDo_title_arrow");
  toDo_title_arrow.textContent = ">";

  const toDo_title = document.createElement("h3");
  toDo_title.classList.add("toDo_title");
  toDo_title.textContent = title;
  toDo_title.style.cursor = "pointer";

  const toDo_title_container = document.createElement("div");
  toDo_title_container.classList.add("toDo_title_container");
  toDo_title_container.append(toDo_title_arrow, toDo_title);

  const contentContainer = document.createElement("div");
  contentContainer.classList.add("todo_content", "hideContent");

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

  toDo_edit_btn.append(toDo_edit_btn_img);

  toDo_edit_btn.addEventListener("click", () => {
    openEditTodo({
      title,
      description,
      dueDate,
      priority,
      projectName,
      createdAt,
      elements: {
        toDo_title,
        toDo_description,
        toDo_dueDate,
        toDo_priority,
      },
    });
  });

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

  contentContainer.append(
    toDo_description,
    toDo_dueDate,
    toDo_priority,
    toDo_edit_btn,
    cancelBtn
  );

  todo_element.append(toDo_title_container, contentContainer);

  toDo_title_container.addEventListener("click", function () {
    contentContainer.classList.toggle("hideContent");
    toDo_title_arrow.classList.toggle("expanded");
  });

  return todo_element;
};
