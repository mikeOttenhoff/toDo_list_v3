import { toDo_database } from "./_database.js";

export const ui_input = function () {
  const toDo_input = document.createElement("form");
  toDo_input.classList.add("toDo_input");

  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.placeholder = "Title";
  titleInput.name = "Title";

  const descriptionInput = document.createElement("textarea");
  descriptionInput.placeholder = "Description";
  descriptionInput.name = "Description";

  const dueDateInput = document.createElement("input");
  dueDateInput.type = "date";
  dueDateInput.name = "date";

  const prioritySelect = document.createElement("select");
  prioritySelect.name = "Priority";
  ["Low", "Medium", "High"].forEach(level => {
    const option = document.createElement("option");
    option.value = level.toLowerCase();
    option.textContent = level;
    prioritySelect.appendChild(option);
  });

  const chooseProject = document.createElement("select");
  chooseProject.classList.add("chooseProject");
  chooseProject.name = "Project";

  // Function to populate dropdown from current database
  const populateProjects = () => {
    chooseProject.innerHTML = ""; // clear previous options
    Object.keys(toDo_database.projects).forEach(projectName => {
      const option = document.createElement("option");
      option.value = projectName;
      option.textContent = projectName;
      chooseProject.appendChild(option);
    });
  };

  // Always populate when form is created
  populateProjects();

  // buttons
  const sendBtn = document.createElement("button");
  sendBtn.classList.add("send_btn");
  sendBtn.textContent = "Send";
  sendBtn.type = "submit";

  const cancelBtn = document.createElement("button");
  cancelBtn.classList.add("cancel_btn");
  cancelBtn.textContent = "X";
  cancelBtn.type = "button";
  cancelBtn.addEventListener("click", () => toDo_input.remove());

  toDo_input.append(
    titleInput,
    descriptionInput,
    dueDateInput,
    prioritySelect,
    chooseProject,
    sendBtn,
    cancelBtn
  );
  return { toDo_input, sendBtn, chooseProject, populateProjects };
};

// export { chooseProject };
