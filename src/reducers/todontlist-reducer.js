export default function todontlistReducer(todontlist, action) {
  switch (action.type) {
    case "fetch": {
      const { todos } = action;
      return [...todos];
    }
    default: {
      throw Error("Invalid action type");
    }
  }
}
