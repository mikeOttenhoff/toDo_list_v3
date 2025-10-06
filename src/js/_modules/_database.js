export const toDo_database = {
  projects: {
    default: {
      createdAt: Date.now(),
      todos: [],
    },
  },
};

export function addProject(projectName) {
  if (!toDo_database.projects[projectName]) {
    toDo_database.projects[projectName] = {
      createdAt: Date.now(),
      todos: [],
    };
    saveToLocalStorage(); // ← add this
  }
}

export function addToDo(projectName, todo) {
  if (!toDo_database.projects[projectName]) {
    addProject(projectName); // ensures createdAt is set and saved
  }
  if (todo) {
    toDo_database.projects[projectName].todos.push({
      ...todo,
      createdAt: Date.now(),
    });
    saveToLocalStorage(); // ← add this
  }
}

export function removeProject(projectName) {
  if (toDo_database.projects[projectName]) {
    delete toDo_database.projects[projectName];
    saveToLocalStorage(); // ← add this
  }
}

export function saveToLocalStorage() {
  localStorage.setItem("toDo_database", JSON.stringify(toDo_database));
}

export function loadFromLocalStorage() {
  const stored = localStorage.getItem("toDo_database");
  if (stored) {
    const parsed = JSON.parse(stored);
    toDo_database.projects = parsed.projects || {};
  }
}

console.log("Database after load:", toDo_database);
