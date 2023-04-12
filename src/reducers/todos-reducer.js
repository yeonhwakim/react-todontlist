import { v4 as uuidv4 } from "uuid";

export default function todosReducer(todos, action) {
  switch (action.type) {
    case "added": {
      const { newTodo } = action;

      return [
        ...todos,
        {
          id: uuidv4(),
          todo: newTodo,
          updateTodo: newTodo,
          startYn: false,
          doneYn: false,
        },
      ];
    }
    case "deleted": {
      const { deletedId } = action;

      return todos.filter(({ id }) => id !== deletedId);
    }
    case "updatedState": {
      const { updatedId } = action;

      return todos.map((item) => {
        const { id } = item;
        return updatedId === id ? { ...item, updateYn: true } : item;
      });
    }
    case "updatedTxt": {
      const { value, updatedId } = action;

      return todos.map((item) => {
        const { id } = item;
        return updatedId === id ? { ...item, updateTodo: value } : item;
      });
    }
    case "canceledUpdate": {
      const { canceledId } = action;

      return todos.map((item) => {
        const { id, todo } = item;
        return canceledId === id
          ? { ...item, updateTodo: todo, updateYn: false }
          : item;
      });
    }
    case "updated": {
      const { updatedId } = action;

      return todos.map((item) => {
        const { id, updateTodo } = item;
        return updatedId === id
          ? { ...item, todo: updateTodo, updateYn: false }
          : item;
      });
    }
    case "checkedStart": {
      const { checkedId, checked } = action;

      return todos.map((item) => {
        const { id } = item;
        return checkedId === id ? { ...item, startYn: checked } : item;
      });
    }
    case "checkedDone": {
      const { checkedId, checked } = action;

      return todos.map((item) => {
        const { id } = item;
        return checkedId === id ? { ...item, doneYn: checked } : item;
      });
    }
    default: {
      throw Error("Invalid action type");
    }
  }
}
