export const createBoardTemplate = () => {
  return (
    `<section class="board container js-board">
  <div class="board__filter-list">
    <a href="#" class="board__filter">SORT BY DEFAULT</a>
    <a href="#" class="board__filter">SORT BY DATE up</a>
    <a href="#" class="board__filter">SORT BY DATE down</a>
  </div>

  <div class="board__tasks js-board__tasks"></div>
  </section>`
  );
};
