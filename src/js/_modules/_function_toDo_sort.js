export const toDo_sort = function (projects, mode = "alphabetical") {
  const entries = Object.entries(projects);
  const defaultProject = entries.find(([name]) => name === "default");
  let otherProjects = entries.filter(([name]) => name !== "default");

  // --- Sort projects ---
  if (mode === "alphabetical") {
    otherProjects.sort(([a], [b]) => a.localeCompare(b));
  } else if (mode === "latest") {
    otherProjects.sort(
      ([, aData], [, bData]) => (bData.createdAt || 0) - (aData.createdAt || 0)
    );
  }

  // --- Sort todos inside each project ---
  const sortTodos = todos => {
    if (!todos) return;
    if (mode === "alphabetical") {
      todos.sort((a, b) => a.title.localeCompare(b.title));
    } else if (mode === "latest") {
      todos.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
    }
  };

  otherProjects.forEach(([, projectData]) => sortTodos(projectData.todos));
  if (defaultProject) sortTodos(defaultProject[1].todos);

  return defaultProject ? [defaultProject, ...otherProjects] : otherProjects;
};
