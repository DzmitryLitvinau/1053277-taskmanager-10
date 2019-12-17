export const formatTime = (date) => {
  const time = date.toLocaleString(`en-GB`, { hour: `numeric`, minute: `numeric`, hour12: true });
  return `${time}`;
};
export const formatDate = (date) => `${date.toLocaleString(`en-GB`, { day: `numeric`, month: `long` })}`;

export const isFirst = (index) => index === 0;
export const take = (array, count, startPos = 0) => array.slice(startPos, startPos + count - 1);
