import { toDo_database } from "./_database.js";
import { ui_toDo_element } from "./_ui_toDo_element.js";
import { toDo_sort } from "./_function_toDo_sort.js";

export function renderToDos(container, sortMode = "alphabetical") {
  container.innerHTML = ""; // clear old DOM

  const sortedProjects = toDo_sort(toDo_database.projects, sortMode);

  sortedProjects.forEach(([projectName, projectData]) => {
    const toDo_project_container = document.createElement("div");
    toDo_project_container.classList.add("toDo_project_container");

    if (projectName !== "default") {
      const title = document.createElement("h3");
      title.textContent = projectName;
      toDo_project_container.appendChild(title);
    }

    const todos = projectData.todos || [];
    todos.forEach(todo => {
      const el = ui_toDo_element(
        todo.title,
        todo.description,
        todo.dueDate,
        todo.priority
      );
      toDo_project_container.appendChild(el);
    });

    container.appendChild(toDo_project_container);
  });
}
