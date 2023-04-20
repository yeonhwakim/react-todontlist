export function setLocalStoage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getLocalStoage(key) {
  return JSON.parse(localStorage.getItem(key));
}
