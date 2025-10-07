// src/js/_modules/_ui_editTodo.js
import { ui_input } from "./_ui_input.js";
import { toDo_database, saveToLocalStorage } from "./_database.js";

/**
 * Opens the edit modal for a given todo item.
 * @param {Object} todoData - The todo's details.
 * @param {string} todoData.title
 * @param {string} todoData.description
 * @param {string} todoData.dueDate
 * @param {string} todoData.priority
 * @param {string} todoData.projectName
 * @param {number} todoData.createdAt
 */
export function openEditTodo({
  title,
  description,
  dueDate,
  priority,
  projectName,
  createdAt,
  elements, // <-- new parameter
}) {
  console.log("Edit clicked for:", title);

  const { toDo_input, sendBtn } = ui_input();

  const overlay = document.createElement("div");
  overlay.classList.add("toDo_overlay");
  document.body.append(overlay, toDo_input);

  // Prefill
  toDo_input.querySelector("input[name='Title']").value = title;
  toDo_input.querySelector("textarea[name='Description']").value = description;
  toDo_input.querySelector("input[name='date']").value = dueDate;
  toDo_input.querySelector("select[name='Priority']").value =
    priority.toLowerCase();

  const handler = e => {
    e.preventDefault();

    const project = toDo_database.projects[projectName];
    if (project) {
      const todo = project.todos.find(todo => todo.createdAt === createdAt);
      if (todo) {
        // Read new values
        const newTitle = toDo_input.querySelector("input[name='Title']").value;
        const newDesc = toDo_input.querySelector(
          "textarea[name='Description']"
        ).value;
        const newDate = toDo_input.querySelector("input[name='date']").value;
        const newPriority = toDo_input.querySelector(
          "select[name='Priority']"
        ).value;

        // Update database
        Object.assign(todo, {
          title: newTitle,
          description: newDesc,
          dueDate: newDate,
          priority: newPriority,
        });
        saveToLocalStorage();

        // Update DOM immediately
        elements.toDo_title.textContent = newTitle;
        elements.toDo_description.textContent = newDesc;
        elements.toDo_dueDate.textContent = newDate;
        elements.toDo_priority.textContent = newPriority;
      }
    }

    // Close and clean up
    toDo_input.remove();
    overlay.remove();
    sendBtn.removeEventListener("click", handler);
  };

  sendBtn.addEventListener("click", handler);
}
