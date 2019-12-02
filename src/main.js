import { createMainMenuTemplate } from './components/main-menu.js';
import { createBoardTemplate } from './components/board.js';
import { createFilterTemplate } from './components/filter.js';
import { createTaskTemplate } from './components/task.js';
import { createEditTaskTemplate } from './components/task-edit.js';
import { createLoadMoreButtonTemplate } from './components/load-more-button.js';
import { generateTasks } from './mock/task.js';
import { generateFilters } from './mock/filter.js';

const TASK_COUNT = 22;

const renderTemplate = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector(`.js-main`);
const siteHeaderElement = siteMainElement.querySelector(`.js-main__control`);

renderTemplate(siteHeaderElement, createMainMenuTemplate(), `beforeend`);
const filters = generateFilters();
renderTemplate(siteMainElement, createFilterTemplate(filters), `beforeend`);
renderTemplate(siteMainElement, createBoardTemplate(), `beforeend`);

const taskListElement = siteMainElement.querySelector(`.js-board__tasks`);

const tasks = generateTasks(TASK_COUNT);
renderTemplate(taskListElement, createEditTaskTemplate(tasks[0]), `beforeend`);
tasks.slice(1).forEach((task) => renderTemplate(taskListElement, createTaskTemplate(task), `beforeend`));

const boardElement = siteMainElement.querySelector(`.js-board`);
renderTemplate(boardElement, createLoadMoreButtonTemplate(), `beforeend`);
