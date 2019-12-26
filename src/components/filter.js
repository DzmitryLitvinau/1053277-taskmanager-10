import AbstractComponent from './abstract-component.js';

const createFilterTemplate = (filter, isChecked) => {
  const { name, count } = filter;

  return (
    `<input
        type="radio"
        id="filter__${name}"
        class="filter__input visually-hidden"
        name="filter"
        ${isChecked ? `checked` : ``}
      />
      <label for="filter__${name}" class="filter__label">
        ${name} <span class="filter__${name}-count">${count}</span>
      </label>`
  );
};

const createFiltersTemplate = (filters) => {
  const filtersTemplate = filters.map((it, i) => createFilterTemplate(it, i === 0)).join(`\n`);

  return (
    `<section class="main__filter filter container">
      ${filtersTemplate}
    </section>`
  );
};

export default class Filter extends AbstractComponent {
  constructor(filters) {
    super();
    this._filters = filters;
  }

  getTemplate() {
    return createFiltersTemplate(this._filters);
  }
}
