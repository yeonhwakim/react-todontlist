export default function todolistReducer(todolist, action) {
  switch (action.type) {
    case "fetch": {
      const { todos } = action;
      return [...todos.filter((item) => item.startYn && !item.doneYn)];
    }
    case "deleted": {
      const { deletedId } = action;
      return todolist.filter(({ id }) => id !== deletedId);
    }
    case "updatedState": {
      const { updatedId } = action;
      return todolist.map((item) => {
        const { id } = item;
        return updatedId === id ? { ...item, updateYn: true } : item;
      });
    }
    case "updatedTxt": {
      const { value, updatedId } = action;
      return todolist.map((item) => {
        const { id } = item;
        return updatedId === id ? { ...item, updateTodo: value } : item;
      });
    }
    case "canceledUpdate": {
      const { canceledId } = action;
      return todolist.map((item) => {
        const { id, todo } = item;
        return canceledId === id
          ? { ...item, updateTodo: todo, updateYn: false }
          : item;
      });
    }
    case "updated": {
      const { updatedId } = action;
      return todolist.map((item) => {
        const { id, updateTodo } = item;
        return updatedId === id
          ? { ...item, todo: updateTodo, updateYn: false }
          : item;
      });
    }
    default: {
      throw Error("Invalid action type");
    }
  }
}
