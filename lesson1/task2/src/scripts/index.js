import { initTodoListHandlers } from "./todoList.js";
import { renderTasks } from "./renderer.js";
import { getTasksList } from "./tasksGateway.js";

document.addEventListener("DOMContentLoaded", () => {
  getTasksList().then((tasksList) => {
    renderTasks(tasksList);
    initTodoListHandlers();
  });
});

// const onStorageChange = (e) => {
//   if (e.key === "tasksList") {
//     renderTasks();
//   }
// };

// window.addEventListener("storage", onStorageChange);

// 1. Get data from server
// 2. Save data to front-end storage
