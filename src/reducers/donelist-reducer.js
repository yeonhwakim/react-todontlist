export default function donelistReducer(donelist, action) {
  switch (action.type) {
    case "fetch": {
      const { todos } = action;
      return [...todos.filter((item) => item.startYn && item.doneYn)];
    }
    default: {
      throw Error("Invalid action type");
    }
  }
}
