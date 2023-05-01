import { v4 as uuidv4 } from "uuid";
import { formatDate } from "../utils/date";
import { getFilteredList } from "../utils/filterList";

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
          priority:
            getFilteredList({ list: todos, filterName: "todontlist" }).length +
            1,
        },
      ];
    }
    case "deleted": {
      const { deletedId } = action;

      const deleteTodos = todos.filter(({ id }) => id !== deletedId);
      const filteredList = getFilteredList({
        list: deleteTodos,
        filterName: "todontlist",
      }).map((item, index) => ({ ...item, priority: index + 1 }));

      return deleteTodos.map((deleteTodo) => {
        const filteredItem = filteredList.find(
          ({ id }) => id === deleteTodo.id
        );

        return filteredItem ? filteredItem : deleteTodo;
      });
    }
    case "resetStart": {
      const { resetId } = action;

      const resetStartTodos = todos.map((item) => {
        const { id } = item;
        return resetId === id
          ? {
              ...item,
              startYn: false,
              startDate: null,
              doneDate: null,
              priority:
                getFilteredList({ list: todos, filterName: "todontlist" })
                  .length + 1,
            }
          : item;
      });
      const filteredList = getFilteredList({
        list: resetStartTodos,
        filterName: "todolist",
      }).map((item, index) => ({ ...item, priority: index + 1 }));

      return resetStartTodos.map((resetStartTodo) => {
        const filteredItem = filteredList.find(
          ({ id }) => id === resetStartTodo.id
        );

        return filteredItem ? filteredItem : resetStartTodo;
      });
    }
    case "resetDone": {
      const { resetId } = action;

      return todos.map((item) => {
        const { id } = item;
        return resetId === id
          ? {
              ...item,
              doneYn: false,
              priority:
                getFilteredList({ list: todos, filterName: "todolist" })
                  .length + 1,
            }
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

      const checkedStartTodos = todos.map((item) => {
        const { id } = item;
        return checkedId === id
          ? {
              ...item,
              startYn: true,
              startDate: formatDate(new Date()),
              priority:
                getFilteredList({ list: todos, filterName: "todolist" })
                  .length + 1,
            }
          : item;
      });
      const filteredList = getFilteredList({
        list: checkedStartTodos,
        filterName: "todontlist",
      }).map((item, index) => ({ ...item, priority: index + 1 }));

      return checkedStartTodos.map((checkedStartTodo) => {
        const filteredItem = filteredList.find(
          ({ id }) => id === checkedStartTodo.id
        );

        return filteredItem ? filteredItem : checkedStartTodo;
      });
    }
    case "checkedDone": {
      const { checkedId, checked } = action;

      const checkdDoneTodos = todos.map((item) => {
        const { id } = item;
        return checkedId === id
          ? {
              ...item,
              doneYn: checked,
              doneDate: formatDate(new Date()),
              priority: null,
            }
          : item;
      });
      const filterList = getFilteredList({
        list: checkdDoneTodos,
        filterName: "todolist",
      }).map((item, index) => ({ ...item, priority: index + 1 }));

      return checkdDoneTodos.map((checkdDoneTodo) => {
        const filterItem = filterList.find(
          ({ id }) => id === checkdDoneTodo.id
        );

        return filterItem ? filterItem : checkdDoneTodo;
      });
    }
    case "sorted": {
      const { sortedTodos, filterName } = action;

      const resortedTodos = sortedTodos.map((item, index) => {
        return { ...item, priority: index + 1 };
      });

      const filteredList = getFilteredList({
        list: resortedTodos,
        filterName,
      }).map((item, index) => ({ ...item, priority: index + 1 }));

      return todos.map((item) => {
        const filteredItem = filteredList.find(({ id }) => id === item.id);

        return filteredItem ? filteredItem : item;
      });
    }
    default: {
      throw Error("Invalid action type");
    }
  }
}
