import "../css/main.css";
import { ui_basic } from "./_modules/_ui_basic.js";
import { loadFromLocalStorage } from "./_modules/_database.js";
import {
  renderToDos,
  renderSidebarProjects,
} from "./_modules/_function_toDo_renderElements.js";
import { function_toDoElement } from "./_modules/_function_toDo_element.js";
import { function_projects } from "./_modules/_function_toDo_projects.js";

document.addEventListener("DOMContentLoaded", () => {
  // 1️⃣ Create the UI and get references
  const ui = ui_basic();

  // 2️⃣ Load database from localStorage
  loadFromLocalStorage();

  const {
    toDo_container,
    addProjectBtn,
    addToDoBtn,
    sidebar_projects,
    sidebar_projects_list,
    chooseProject,
  } = ui;

  // 3️⃣ Render todos and sidebar
  renderToDos(toDo_container);
  renderSidebarProjects(sidebar_projects_list, toDo_container);

  // 4️⃣ Initialize project & todo functionality, passing DOM refs
  function_projects({
    addProjectBtn,
    toDo_container,
    sidebar_projects_list,
  });
  function_toDoElement({ toDo_container, sidebar_projects_list });
});
