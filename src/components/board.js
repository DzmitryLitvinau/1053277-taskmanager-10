import AbstractComponent from './abstract-component.js';

const createBoardTemplate = () => {
  return (
    `<section class="board container js-board"></section>`
  );
};

export default class Board extends AbstractComponent {
  getTemplate() {
    return createBoardTemplate();
  }
}
