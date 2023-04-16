import { v4 as uuidv4 } from "uuid";
import { formatDate } from "../utils/date";

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
          addDate: formatDate(new Date()),
        },
      ];
    }
    case "deleted": {
      const { deletedId } = action;

      return todos.filter(({ id }) => id !== deletedId);
    }
    case "resetStart": {
      const { resetId } = action;

      return todos.map((item) => {
        const { id } = item;
        return resetId === id
          ? { ...item, startYn: false, startDate: null }
          : item;
      });
    }
    case "resetDone": {
      const { resetId } = action;

      return todos.map((item) => {
        const { id } = item;
        return resetId === id
          ? { ...item, doneYn: false, doneDate: null }
          : item;
      });
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
      const { checkedId } = action;

      return todos.map((item) => {
        const { id } = item;
        return checkedId === id
          ? { ...item, startYn: true, startDate: formatDate(new Date()) }
          : item;
      });
    }
    case "checkedDone": {
      const { checkedId, checked } = action;

      return todos.map((item) => {
        const { id } = item;
        return checkedId === id
          ? { ...item, doneYn: checked, doneDate: formatDate(new Date()) }
          : item;
      });
    }
    default: {
      throw Error("Invalid action type");
    }
  }
}
