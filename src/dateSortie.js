export function getDatePlus5mn() {
  return new Date(new Date().getTime() + 5 * 60 * 1000);
}

function pad(val) {
  return String(val).padStart(2, "0");
}

export function getHtmlDate(date) {
  return `${date.getFullYear()}-${pad(date.getMonth())}-${pad(date.getDate())}`;
}

export function getHeure(date) {
  return `${pad(date.getHours())}:${pad(date.getMinutes())}`;
}
