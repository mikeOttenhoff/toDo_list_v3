import { ui_input, chooseProject } from "./_ui_input";
import { toDo_database, addToDo } from "./_database.js";
import { renderToDos } from "./_function_toDo_renderElements.js";

export const function_projects = function () {
  const { toDo_input, sendBtn, chooseProject } = ui_input();
  const addProject_btn = document.querySelector(".addProject_btn");
  const sidebar_projects = document.querySelector(".sidebar_projects");
  const toDo_container = document.querySelector(".toDo_container");

  addProject_btn.addEventListener("click", function () {
    const project_input_container = document.createElement("div");
    project_input_container.classList.add("project_input_container");

    const project_input = document.createElement("input");
    project_input.placeholder = "Enter project name";

    // buttons
    const project_sendBtn = document.createElement("button");
    project_sendBtn.textContent = "Send";
    project_sendBtn.type = "submit";

    project_input_container.append(project_input, project_sendBtn);
    sidebar_projects.append(project_input_container);

    project_sendBtn.addEventListener("click", function () {
      const projectName = project_input.value.trim();
      if (!projectName) return;

      // Add project to database
      if (!toDo_database.projects[projectName]) {
        toDo_database.projects[projectName] = { todos: [] };
      }

      //adding title to sidebar
      const project_title = document.createElement("h3");
      project_title.textContent = projectName;
      sidebar_projects.append(project_title);

      // Update all open forms dropdowns
      document.querySelectorAll(".chooseProject").forEach(select => {
        const optionExists = [...select.options].some(
          o => o.value === projectName
        );
        if (!optionExists) {
          const option = document.createElement("option");
          option.value = projectName;
          option.textContent = projectName;
          select.appendChild(option);
        }
      });
      console.log(toDo_database);

      project_input_container.remove();
    });
  });
};
