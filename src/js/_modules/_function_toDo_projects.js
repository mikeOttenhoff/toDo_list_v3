import { ui_input } from "./_ui_input";
import { toDo_database, addToDo } from "./_database.js";

export const function_projects = function () {
  const { toDo_input, sendBtn, chooseProject } = ui_input();
  const addProject_btn = document.querySelector(".addProject_btn");
  const sidebar_projects = document.querySelector(".sidebar_projects");

  addProject_btn.addEventListener("click", function () {
    const project_input_container = document.createElement("div");
    project_input_container.classList.add("project_input_container");
    const project_input = document.createElement("input");
    project_input.placeholder = "Enter project name";

    // buttons
    const project_sendBtn = document.createElement("button");
    project_sendBtn.classList.add("project_send_btn");
    project_sendBtn.textContent = "Send";
    project_sendBtn.type = "submit";

    project_input_container.append(project_input, project_sendBtn);
    sidebar_projects.append(project_input_container);

    project_sendBtn.addEventListener("click", function () {
      const projectName = project_input.value.trim();
      if (!projectName) return;

      const project = document.createElement("h3");
      project.textContent = projectName;
      sidebar_projects.append(project);

      const option = document.createElement("option");
      option.value = projectName;
      option.textContent = projectName;
      chooseProject.append(option);

      addToDo(projectName);

      console.log(toDo_database);

      project_input_container.remove();
    });
  });
};
