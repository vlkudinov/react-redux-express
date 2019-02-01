export const compare = field => (a, b) => {
  if (field === 'time') {
    const aDate = Date.parse(`${a['departure_date']} ${a['departure_time']}`);
    const bDate = Date.parse(`${b['departure_date']} ${b['departure_time']}`);
    return aDate - bDate;
  }
  return a[field] - b[field];
};
