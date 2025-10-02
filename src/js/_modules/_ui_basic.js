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

  const sidebar_projects_title = document.createElement("h2");
  sidebar_projects_title.textContent = "Projects";

  const addProjectBtn = document.createElement("button");
  addProjectBtn.classList.add("addProject_btn");
  addProjectBtn.textContent = "+";

  sidebar_projects.append(sidebar_projects_title, addProjectBtn);
  sidebar.append(sidebar_projects);

  // Todo container
  const toDo_container = document.createElement("div");
  toDo_container.classList.add("toDo_container");

  const sortSelect = document.createElement("select");

  ["alphabetical", "latest"].forEach(mode => {
    const option = document.createElement("option");
    option.value = mode;
    option.textContent = mode === "alphabetical" ? "Alphabetical" : "Latest";
    sortSelect.appendChild(option);
  });

  sortSelect.value = "alphabetical";

  sortSelect.addEventListener("change", e => {
    renderToDos(toDo_container, e.target.value);
  });

  container.append(sortSelect);

  // // Temporary just to tweek ui
  // toDo_container.append(
  //   ui_toDo_element("Test", "Lange tekst", "16 feb 1990", "high")
  // );

  const addToDoBtn = document.createElement("button");
  addToDoBtn.classList.add("addToDo_btn");
  addToDoBtn.textContent = "+";
  addToDoBtn.type = "button";

  container.append(mainTitle, sidebar, toDo_container, addToDoBtn);
  document.body.append(container);

  return {
    container,
    sidebar,
    sidebar_projects,
    addProjectBtn,
    toDo_container,
    addToDoBtn,
  };
};
