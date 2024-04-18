export const getTime = (x) => {
  const date = new Date(x);
  const year = date.getFullYear(x);
  const month =
    date.getMonth(x) < 10 ? "0" + (date.getMonth(x) + 1) : date.getMonth(x);
  const day =
    date.getDate(x) < 10 ? "0" + (date.getDate(x) + 1) : date.getDate(x);
  const hour =
    date.getHours(x) < 10 ? "0" + (date.getHours(x) + 1) : date.getHours(x);
  const minute =
    date.getMinutes(x) < 10
      ? "0" + (date.getMinutes(x) + 1)
      : date.getMinutes(x);
  const second =
    date.getSeconds(x) < 10
      ? "0" + (date.getSeconds(x) + 1)
      : date.getSeconds(x);
  return { year, month, day, hour, minute, second };
};
