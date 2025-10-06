import {
  addProject,
  removeProject,
  toDo_database,
  saveToLocalStorage,
} from "./_database.js";
import {
  renderToDos,
  renderSidebarProjects,
} from "./_function_toDo_renderElements.js";
import { ui_input } from "./_ui_input.js";

export const function_projects = function ({
  addProjectBtn,
  sidebar_projects_list,
  toDo_container,
  chooseProject,
}) {
  if (!addProjectBtn || !sidebar_projects_list || !toDo_container) {
    console.error("Missing DOM elements for projects module!");
    return;
  }

  // Add new project
  addProjectBtn.addEventListener("click", () => {
    const {
      toDo_input,
      sendBtn,
      chooseProject: inputChooseProject,
    } = ui_input();

    const project_input_container = document.createElement("div");
    project_input_container.classList.add("project_input_container");

    const project_input = document.createElement("input");
    project_input.placeholder = "Enter project name";

    const project_sendBtn = document.createElement("button");
    project_sendBtn.type = "submit";
    project_sendBtn.textContent = "Send";

    project_input_container.append(project_input, project_sendBtn);
    sidebar_projects_list.append(project_input_container); // ✅ append to list

    project_sendBtn.addEventListener("click", e => {
      e.preventDefault();
      const projectName = project_input.value.trim();
      if (!projectName) return;

      // Add to database
      addProject(projectName);
      saveToLocalStorage();

      // Update sidebar and dropdowns
      renderSidebarProjects(sidebar_projects_list, toDo_container); // ✅ pass references
      updateDropdowns(projectName);

      project_input_container.remove();
      renderToDos(toDo_container);
    });

    function updateDropdowns(projectName) {
      [chooseProject, inputChooseProject].forEach(select => {
        if (!select) return;
        const exists = [...select.options].some(o => o.value === projectName);
        if (!exists) {
          const option = document.createElement("option");
          option.value = projectName;
          option.textContent = projectName;
          select.appendChild(option);
        }
      });
    }
  });
};
