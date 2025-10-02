export const toDo_database = {
  projects: {
    default: {
      todos: [],
    },
  },
};

// Function to add a todo
export function addToDo(projectName, todo) {
  if (!toDo_database.projects[projectName]) {
    toDo_database.projects[projectName] = { todos: [] };
  }
  toDo_database.projects[projectName].todos.push(todo);
}
