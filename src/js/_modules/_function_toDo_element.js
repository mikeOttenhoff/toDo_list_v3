import { ui_input } from "./_ui_input";
import { toDo_database, addToDo } from "./_database.js";
import { renderToDos } from "./_function_toDo_renderElements.js";

export const function_toDoElement = function () {
  const toDo_container = document.querySelector(".toDo_container");
  const addToDo_btn = document.querySelector(".addToDo_btn");

  //Add the input context to the toDo container
  addToDo_btn.addEventListener("click", function () {
    const { toDo_input, sendBtn, chooseProject } = ui_input();

    Object.keys(toDo_database.projects).forEach(projectName => {
      if (![...chooseProject.options].some(o => o.value === projectName)) {
        const option = document.createElement("option");
        option.value = projectName;
        option.textContent = projectName;
        chooseProject.appendChild(option);
      }
    });
    const toDo_overlay = document.createElement("div");
    toDo_overlay.classList.add("toDo_overlay");

    toDo_container.append(toDo_overlay, toDo_input);

    sendBtn.addEventListener("click", function (e) {
      e.preventDefault();
      const form = e.target.parentNode;

      const title = form.elements["Title"].value;
      const description = form.elements["Description"].value;
      const dueDate = form.elements["date"].value;
      const priority = form.elements["Priority"].value;
      const project = chooseProject.value || "default";

      addToDo(project, { title, description, dueDate, priority });

      renderToDos(toDo_container);

      toDo_input.remove();
      toDo_overlay.remove();
    });
  });
};
