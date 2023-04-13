export function getFilterdList({ list, filterName }) {
  return list.filter(({ startYn, doneYn }) => {
    if (filterName === "todontlist") {
      return !startYn && !doneYn;
    }
    if (filterName === "todolist") {
      return startYn && !doneYn;
    }
    if (filterName === "donelist") {
      return startYn && doneYn;
    }
    return [];
  });
}

export function getFilterdLessThreeMonthList(list) {
  return list.length > 0
    ? list.filter((item) => {
        const { addDate, startDate } = item;

        return (
          startDate ||
          (!startDate &&
            new Date().getTime() - new Date(addDate).getTime() <
              3 * 30 * 24 * 60 * 60 * 1000)
        );
      })
    : [];
}
