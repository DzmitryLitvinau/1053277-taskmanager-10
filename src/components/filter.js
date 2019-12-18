import { createElement } from '../util.js';

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

export default class Filter {
  constructor(filters) {
    this._filters = filters;
    this._element = null;
  }

  getTemplate() {
    return createFiltersTemplate(this._filters);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
