import { ui_input } from "./_ui_input";
import { ui_toDo_element } from "./_ui_toDo_element.js";
import { toDo_database, addToDo } from "./_database.js";

export const function_toDoElement = function () {
  const { toDo_input, sendBtn, chooseProject } = ui_input();
  const toDo_container = document.querySelector(".toDo_container");
  const addToDo_btn = document.querySelector(".addToDo_btn");
  const send_btn = document.querySelector(".send_btn");

  //Add the input context to the toDo container
  addToDo_btn.addEventListener("click", function () {
    toDo_container.append(toDo_input);
  });

  sendBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const element = e.target.parentNode;
    // console.log(element);

    const title = element.elements[0].value;
    const description = element.elements[1].value;
    const dueDate = element.elements[2].value;
    const priority = element.elements[3].value;

    const todo = { title, description, dueDate, priority };

    const projectName = chooseProject.value || "default";
    addToDo(projectName, todo);

    toDo_container.append(
      ui_toDo_element(title, description, dueDate, priority)
    );

    console.log(toDo_database);

    toDo_input.remove();
  });
};
