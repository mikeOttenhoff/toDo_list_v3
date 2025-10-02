export const toDo_sort = function (projects, mode = "alphabetical") {
  const entries = Object.entries(projects);
  const defaultProject = entries.find(([name]) => name === "default");
  let otherProjects = entries.filter(([name]) => name !== "default");

  if (mode === "alphabetical") {
    otherProjects.sort(([a], [b]) => a.localeCompare(b));
  } else if (mode === "latest") {
    otherProjects.reverse();
  }

  return defaultProject ? [defaultProject, ...otherProjects] : otherProjects;
};
