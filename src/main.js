import BoardComponent from './components/board.js';
import FilterComponent from './components/filter.js';
import SiteMenuComponent from './components/main-menu.js';
import BoardController from './controllers/board.js';
import { generateTasks } from './mock/task.js';
import { generateFilters } from './mock/filter.js';
import { RenderPosition, renderTemplate } from './utils/render.js';

const TASK_COUNT = 22;

const siteMainElement = document.querySelector(`.js-main`);
const siteHeaderElement = siteMainElement.querySelector(`.js-main__control`);

renderTemplate(siteHeaderElement, new SiteMenuComponent(), RenderPosition.BEFOREEND);
const filters = generateFilters();
renderTemplate(siteMainElement, new FilterComponent(filters), RenderPosition.BEFOREEND);
const boardComponent = new BoardComponent();
renderTemplate(siteMainElement, boardComponent, RenderPosition.BEFOREEND);

const tasks = generateTasks(TASK_COUNT);
const boardController = new BoardController(boardComponent);

boardController.renderTemplate(tasks);

