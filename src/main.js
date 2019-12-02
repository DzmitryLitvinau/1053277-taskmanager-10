import { createMainMenuTemplate } from './components/main-menu.js';
import { createBoardTemplate } from './components/board.js';
import { createFilterTemplate } from './components/filter.js';
import { createTaskTemplate } from './components/task.js';
import { createEditTaskTemplate } from './components/task-edit.js';
import { createLoadMoreButtonTemplate } from './components/load-more-button.js';
import { generateTasks } from './mock/task.js';
import { generateFilters } from './mock/filter.js';

const TASK_COUNT = 22;
const SHOWING_TASKS_COUNT_ON_START = 8;
const SHOWING_TASKS_COUNT_BY_BUTTON = 8;

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
let showingTasksCount = SHOWING_TASKS_COUNT_ON_START;
tasks.slice(1, showingTasksCount).forEach((task) => renderTemplate(taskListElement, createTaskTemplate(task), `beforeend`));

const boardElement = siteMainElement.querySelector(`.js-board`);
renderTemplate(boardElement, createLoadMoreButtonTemplate(), `beforeend`);
const loadMoreButton = boardElement.querySelector(`.load-more`);
loadMoreButton.addEventListener(`click`, () => {
  const prevTasksCount = showingTasksCount;
  showingTasksCount = showingTasksCount + SHOWING_TASKS_COUNT_BY_BUTTON;

  tasks.slice(prevTasksCount, showingTasksCount)
    .forEach((task) => renderTemplate(taskListElement, createTaskTemplate(task), `beforeend`));

  if (showingTasksCount >= tasks.length) {
    loadMoreButton.remove();
  }
});
