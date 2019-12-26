export const formatTime = (date) => {
  const time = date.toLocaleString(`en-GB`, { hour: `numeric`, minute: `numeric`, hour12: true });
  return `${time}`;
};
export const formatDate = (date) => `${date.toLocaleString(`en-GB`, { day: `numeric`, month: `long` })}`;
