export const formatTime = (date) => {
  const time = date.toLocaleString(`en-GB`, { hour: `numeric`, minute: `numeric`, hour12: true });
  return `${time}`;
};
export const formatDate = (date) => `${date.toLocaleString(`en-GB`, { day: `numeric`, month: `long` })}`;

export const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`,
};

export const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};

export const renderTemplate = (container, element, place) => {
  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(element);
      break;
    case RenderPosition.BEFOREEND:
      container.append(element);
      break;
  }
};
