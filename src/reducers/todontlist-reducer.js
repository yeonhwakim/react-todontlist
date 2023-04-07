export default function todontlistReducer(todontlist, action) {
  switch (action.type) {
    case "fetch": {
      const { todos } = action;
      return [...todos];
    }
    case "added": {
      const { newTodo } = action;
      return [
        ...todontlist,
        {
          id: todontlist.length + 1,
          todo: newTodo,
          updateTodo: newTodo,
          startYn: false,
          doneYn: false,
        },
      ];
    }
    case "deleted": {
      const { deletedId } = action;
      return todontlist.filter(({ id }) => id !== deletedId);
    }
    default: {
      throw Error("Invalid action type");
    }
  }
}
