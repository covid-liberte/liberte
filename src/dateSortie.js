function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

/**
 * Génère une heure entre 20 minutes avant maintenant et 45 minutes avant.
 */
export function generateDateSortie() {
  return new Date(
    new Date().getTime() - getRandomInt(20 * 60 * 1000, 45 * 60 * 1000)
  );
}

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
