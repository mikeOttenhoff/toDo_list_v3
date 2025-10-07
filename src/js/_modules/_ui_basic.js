import { ui_toDo_element } from "./_ui_toDo_element.js";
import { renderToDos } from "./_function_toDo_renderElements.js";

export const ui_basic = function () {
  const container = document.createElement("div");
  container.classList.add("container");

  const mainTitle = document.createElement("h1");
  mainTitle.textContent = "To-Do list";

  // sidebar
  const sidebar = document.createElement("div");
  sidebar.classList.add("sidebar");

  const sidebar_projects = document.createElement("div");
  sidebar_projects.classList.add("sidebar_projects");

  const sidebar_projects_header = document.createElement("div");
  sidebar_projects_header.classList.add("sidebar_projects_header");

  const sidebar_projects_title = document.createElement("h2");
  sidebar_projects_title.textContent = "Projects";

  const addProjectBtn = document.createElement("button");
  addProjectBtn.classList.add("addProject_btn");
  addProjectBtn.textContent = "+";

  sidebar_projects_header.append(sidebar_projects_title, addProjectBtn);

  const sidebar_projects_list = document.createElement("div");
  sidebar_projects_list.classList.add("sidebar_projects_list");

  sidebar_projects.append(sidebar_projects_header, sidebar_projects_list);
  sidebar.append(sidebar_projects);

  // Todo container
  const toDo_container = document.createElement("div");
  toDo_container.classList.add("toDo_container");

  const sortSelect = document.createElement("select");
  sortSelect.classList.add("sortToggle");

  ["alphabetical", "latest", "dueDate"].forEach(mode => {
    const option = document.createElement("option");
    option.value = mode;
    if (mode === "alphabetical") option.textContent = "Alphabetical";
    else if (mode === "latest") option.textContent = "Latest";
    else if (mode === "dueDate") option.textContent = "Due Date";
    sortSelect.appendChild(option);
  });

  sortSelect.value = "alphabetical";

  sortSelect.addEventListener("change", e => {
    renderToDos(toDo_container, e.target.value);
  });

  const addToDoBtn = document.createElement("button");
  addToDoBtn.classList.add("addToDo_btn");
  addToDoBtn.textContent = "+";
  addToDoBtn.type = "button";

  const sort_todo_container = document.createElement("div");
  sort_todo_container.classList.add("sort_todo_container");

  sort_todo_container.append(sortSelect, toDo_container);
  container.append(mainTitle, sidebar, sort_todo_container, addToDoBtn);
  document.body.append(container);

  return {
    container,
    sidebar,
    sidebar_projects,
    sidebar_projects_list,
    addProjectBtn,
    toDo_container,
    addToDoBtn,
  };
};
