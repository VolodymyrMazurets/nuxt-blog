export default (value, type = "date") => {
  const date = new Date(value);
  return type === "date" ? date.toLocaleString() : date.toLocaleDateString();
};
