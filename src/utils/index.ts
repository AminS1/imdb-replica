export const getYearFromDateString = (date: string) => {
  if (date) {
    return new Date(date).getFullYear();
  }
  return "Invalid Date";
};

export const getDisplayRuntime = (mins: number) => {
  const hours = Math.floor(mins / 60);
  const minutes = mins % 60;
  return `${hours}h ${minutes}m`;
};
