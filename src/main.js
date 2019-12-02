import { createMainMenuTemplate } from './components/main-menu.js';
import { createBoardTemplate } from './components/board.js';
import { createFilterTemplate } from './components/filter.js';
import { createTaskTemplate } from './components/task.js';
import { createEditTaskTemplate } from './components/task-edit.js';
import { createLoadMoreButtonTemplate } from './components/load-more-button.js';

const TASK_COUNT = 3;

const renderTemplate = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector(`.js-main`);
const siteHeaderElement = siteMainElement.querySelector(`.js-main__control`);

renderTemplate(siteHeaderElement, createMainMenuTemplate(), `beforeend`);
renderTemplate(siteMainElement, createFilterTemplate(), `beforeend`);
renderTemplate(siteMainElement, createBoardTemplate(), `beforeend`);

const taskListElement = siteMainElement.querySelector(`.js-board__tasks`);
renderTemplate(taskListElement, createEditTaskTemplate(), `beforeend`);

for (let i = 0; i < TASK_COUNT; i++) {
  renderTemplate(taskListElement, createTaskTemplate(), `beforeend`);
}

const boardElement = siteMainElement.querySelector(`.js-board`);
renderTemplate(boardElement, createLoadMoreButtonTemplate(), `beforeend`);
