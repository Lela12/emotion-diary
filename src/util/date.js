export const getStringDate = (date) => {
  return date.toISOString().slice(0, 10); //2022-01-02
};
