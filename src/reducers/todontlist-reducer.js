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
    case "updatedState": {
      const { updatedId } = action;
      return todontlist.map((item) => {
        const { id } = item;
        return updatedId === id ? { ...item, updateYn: true } : item;
      });
    }
    case "updatedTxt": {
      const { value, updatedId } = action;
      return todontlist.map((item) => {
        const { id } = item;
        return updatedId === id ? { ...item, updateTodo: value } : item;
      });
    }
    case "canceledUpdate": {
      const { canceledId } = action;
      return todontlist.map((item) => {
        const { id, todo } = item;
        return canceledId === id
          ? { ...item, updateTodo: todo, updateYn: false }
          : item;
      });
    }
    case "updated": {
      const { updatedId } = action;
      return todontlist.map((item) => {
        const { id, updateTodo } = item;
        return updatedId === id
          ? { ...item, todo: updateTodo, updateYn: false }
          : item;
      });
    }
    case "checked": {
      const { checkedId, checked } = action;
      return todontlist.map((item) => {
        const { id } = item;
        return checkedId === id ? { ...item, startYn: checked } : item;
      });
    }
    default: {
      throw Error("Invalid action type");
    }
  }
}
