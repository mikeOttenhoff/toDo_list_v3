import { toDo_database, removeProject } from "./_database.js";
import { ui_toDo_element } from "./_ui_toDo_element.js";
import { toDo_sort } from "./_function_toDo_sort.js";

export function renderToDos(container, sortMode = "alphabetical") {
  container.innerHTML = "";

  const sortedProjects = toDo_sort(toDo_database.projects, sortMode);

  sortedProjects.forEach(([projectName, projectData]) => {
    const toDo_project_container = document.createElement("div");
    toDo_project_container.classList.add("toDo_project_container");

    if (projectName !== "default") {
      const title = document.createElement("h3");
      title.textContent = projectName;
      toDo_project_container.appendChild(title);
    }

    (projectData.todos || []).forEach(todo => {
      const el = ui_toDo_element(
        todo.title,
        todo.description,
        todo.dueDate,
        todo.priority,
        projectName,
        todo.createdAt
      );
      toDo_project_container.appendChild(el);
    });

    container.appendChild(toDo_project_container);
  });
}

export function renderSidebarProjects(sidebar_projects_list, toDo_container) {
  sidebar_projects_list.innerHTML = "";

  Object.keys(toDo_database.projects).forEach(projectName => {
    if (projectName === "default") return;

    const projectDiv = document.createElement("div");
    const title = document.createElement("h3");
    title.textContent = projectName;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "X";
    removeBtn.addEventListener("click", () => {
      removeProject(projectName);
      renderSidebarProjects(sidebar_projects_list, toDo_container);
      renderToDos(toDo_container);
    });

    projectDiv.append(title, removeBtn);
    sidebar_projects_list.append(projectDiv);
  });
}
