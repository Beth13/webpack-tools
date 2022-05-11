import { renderTasks, createListItem } from "./renderer.js";
import { createTask, getTasksList } from "./tasksGateway.js";

export const onCreateTask = () => {
  const todoListElem = document.querySelector(".list");
  const taskTitleInputElem = document.querySelector(".task-input");
  const text = taskTitleInputElem.value;

  if (!text) {
    return;
  }

  taskTitleInputElem.value = "";

  const newTask = {
    text,
    done: false,
    createDate: new Date().toISOString(),
  };

  createTask(newTask)
    .then((response) => response.json())
    .then((task) => todoListElem.prepend(createListItem(task)));
};

// 1. Prepare data
// 2. Write data to db
// 3. Read new data from server
// 4. Save new data to front-end storage
// 5. Update UI based on new data
