function leftPad(value) {
  return String(value).padStart(2, "0");
}

export function formatDate(date, delimiter = "-") {
  const year = date.getFullYear();
  const month = leftPad(date.getMonth() + 1);
  const day = leftPad(date.getDate());

  return [year, month, day].join(delimiter);
}
