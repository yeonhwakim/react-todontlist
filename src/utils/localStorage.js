export function setLocalStoage(todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
}

export function getLocalStoage() {
  return JSON.parse(localStorage.getItem("todos"));
}
