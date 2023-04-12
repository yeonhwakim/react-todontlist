export function getFilterdList({ list, filterName }) {
  return list.filter(({ startYn, doneYn }) => {
    if (filterName === "todontlist") {
      return !startYn && !doneYn;
    }
    if (filterName === "todolist") {
      return startYn && !doneYn;
    }
    return startYn && doneYn;
  });
}
