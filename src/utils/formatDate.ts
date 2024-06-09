export const formatDate = (date: Date) => {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    weekday: "long",
    month: "long",
    day: "numeric",
  });
};
