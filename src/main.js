import BoardComponent from './components/board.js';
import FilterComponent from './components/filter.js';
import LoadMoreButtonComponent from './components/load-more-button.js';
import TaskEditComponent from './components/task-edit.js';
import TaskComponent from './components/task.js';
import SiteMenuComponent from './components/main-menu.js';
import {
  generateTasks
} from './mock/task.js';
import {
  generateFilters
} from './mock/filter.js';
import {
  RenderPosition,
  renderTemplate
} from './util.js';

const TASK_COUNT = 22;
const SHOWING_TASKS_COUNT_ON_START = 8;
const SHOWING_TASKS_COUNT_BY_BUTTON = 8;

const renderTask = (task) => {
  const taskComponent = new TaskComponent(task);
  const taskEditComponent = new TaskEditComponent(task);

  const editButton = taskComponent.getElement().querySelector(`.card__btn--edit`);
  editButton.addEventListener(`click`, () => {
    taskListElement.replaceChild(taskEditComponent.getElement(), taskComponent.getElement());
  });

  const editForm = taskEditComponent.getElement().querySelector(`form`);
  editForm.addEventListener(`submit`, () => {
    taskListElement.replaceChild(taskComponent.getElement(), taskEditComponent.getElement());
  });

  renderTemplate(taskListElement, taskComponent.getElement(), RenderPosition.BEFOREEND);
};
const siteMainElement = document.querySelector(`.js-main`);
const siteHeaderElement = siteMainElement.querySelector(`.js-main__control`);

renderTemplate(siteHeaderElement, new SiteMenuComponent().getElement(), RenderPosition.BEFOREEND);
const filters = generateFilters();
renderTemplate(siteMainElement, new FilterComponent(filters).getElement(), RenderPosition.BEFOREEND);
const boardComponent = new BoardComponent();
renderTemplate(siteMainElement, boardComponent.getElement(), RenderPosition.BEFOREEND);

const taskListElement = boardComponent.getElement().querySelector(`.js-board__tasks`);

const tasks = generateTasks(TASK_COUNT);

let showingTasksCount = SHOWING_TASKS_COUNT_ON_START;
tasks.slice(0, showingTasksCount).forEach((task) => {
  renderTask(task);
});

const loadMoreButtonComponent = new LoadMoreButtonComponent();
renderTemplate(boardComponent.getElement(), loadMoreButtonComponent.getElement(), RenderPosition.BEFOREEND);

loadMoreButtonComponent.getElement().addEventListener(`click`, () => {
  const prevTasksCount = showingTasksCount;
  showingTasksCount = showingTasksCount + SHOWING_TASKS_COUNT_BY_BUTTON;

  tasks.slice(prevTasksCount, showingTasksCount)
    .forEach((task) => renderTask(task));

  if (showingTasksCount >= tasks.length) {
    loadMoreButtonComponent.getElement().remove();
    loadMoreButtonComponent.removeElement();
  }
});
