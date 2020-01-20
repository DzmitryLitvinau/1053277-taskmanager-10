import BoardComponent from './components/board.js';
import SiteMenuComponent from './components/main-menu.js';
import BoardController from './controllers/board.js';
import FilterController from './controllers/filters.js';
import { generateTasks } from './mock/task.js';
import { RenderPosition, renderTemplate } from './utils/render.js';
import TasksModel from './models/tasks.js';

const TASK_COUNT = 22;

const siteMainElement = document.querySelector(`.js-main`);
const siteHeaderElement = siteMainElement.querySelector(`.js-main__control`);
const siteMenuComponent = new SiteMenuComponent();
siteMenuComponent.getElement().querySelector(`.control__label--new-task`)
  .addEventListener(`click`, () => {
    boardController.createTask();
  });
renderTemplate(siteHeaderElement, siteMenuComponent, RenderPosition.BEFOREEND);


const tasks = generateTasks(TASK_COUNT);
const tasksModel = new TasksModel();
tasksModel.setTasks(tasks);
const filterController = new FilterController(siteMainElement, tasksModel);
filterController.render();
const boardComponent = new BoardComponent();
renderTemplate(siteMainElement, boardComponent, RenderPosition.BEFOREEND);

const boardController = new BoardController(boardComponent, tasksModel);

boardController.renderTemplate();

