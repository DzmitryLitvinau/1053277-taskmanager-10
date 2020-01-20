import BoardComponent from './components/board.js';
import SiteMenuComponent, { MenuItem } from './components/main-menu.js';
import StatisticsComponent from './components/statistics.js';
import BoardController from './controllers/board.js';
import FilterController from './controllers/filters.js';
import { generateTasks } from './mock/task.js';
import { RenderPosition, renderTemplate } from './utils/render.js';
import TasksModel from './models/tasks.js';

const TASK_COUNT = 22;

const siteMainElement = document.querySelector(`.js-main`);
const siteHeaderElement = siteMainElement.querySelector(`.js-main__control`);
const siteMenuComponent = new SiteMenuComponent();

renderTemplate(siteHeaderElement, siteMenuComponent, RenderPosition.BEFOREEND);


const tasks = generateTasks(TASK_COUNT);
const tasksModel = new TasksModel();
tasksModel.setTasks(tasks);

const dateTo = new Date();
const dateFrom = (() => {
  const d = new Date(dateTo);
  d.setDate(d.getDate() - 7);
  return d;
})();
const statisticsComponent = new StatisticsComponent({ tasks: tasksModel, dateFrom, dateTo });


const filterController = new FilterController(siteMainElement, tasksModel);
filterController.render();
const boardComponent = new BoardComponent();
renderTemplate(siteMainElement, boardComponent, RenderPosition.BEFOREEND);
renderTemplate(siteMainElement, statisticsComponent, RenderPosition.BEFOREEND);
const boardController = new BoardController(boardComponent, tasksModel);
statisticsComponent.hide();
boardController.renderTemplate();

siteMenuComponent.setOnChange((menuItem) => {
  switch (menuItem) {
    case MenuItem.NEW_TASK:
      siteMenuComponent.setActiveItem(MenuItem.TASKS);
      statisticsComponent.hide();
      boardController.show();
      boardController.createTask();
      break;
    case MenuItem.STATISTICS:
      boardController.hide();
      statisticsComponent.show();
      break;
    case MenuItem.TASKS:
      statisticsComponent.hide();
      boardController.show();
      break;
  }
});

