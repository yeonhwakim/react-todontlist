import { useCallback } from "react";

import List from "../list/List";

import toDoListStyle from "./ToDoList.module.css";

import useTodos from "../../hooks/use-todos";

import { getFilteredList } from "../../utils/filterList";

function ToDoList() {
  const [todos, dispatch, filteredTodos] = useTodos();

  const todolist = filteredTodos;

  const handleReset = (resetId) => {
    if (!window.confirm("Really?")) {
      return;
    }

    dispatch({ type: "resetStart", resetId });

    if (filteredTodos?.length > 3) {
      return;
    }

    dispatch({
      type: "checkedStart",
      checkedId: getFilteredList({ list: todos, filterName: "todontlist" })[0]
        ?.id,
    });
  };

  const handleUpdateState = (updatedId) => {
    dispatch({ type: "updatedState", updatedId });
  };

  const handleUpdateTxt = (e, updatedId) => {
    dispatch({ type: "updatedTxt", updatedId, value: e.target.value });
  };

  const handleCancelUpdate = (canceledId) => {
    dispatch({ type: "canceledUpdate", canceledId });
  };

  const handleUpdate = (e, updatedId) => {
    e.preventDefault();

    if (window.confirm("Sure?")) {
      dispatch({ type: "updated", updatedId });
    }
  };

  const handleCheck = (e, checkedId) => {
    dispatch({ type: "checkedDone", checkedId, checked: e.target.checked });

    if (filteredTodos?.length > 3) {
      return;
    }

    dispatch({
      type: "checkedStart",
      checkedId: getFilteredList({ list: todos, filterName: "todontlist" })[0]
        ?.id,
    });
  };

  const handleSort = useCallback(
    (sortedTodos) => {
      dispatch({ type: "sorted", sortedTodos, filterName: "todolist" });
    },
    [dispatch]
  );

  return (
    <div className={toDoListStyle.toDoList}>
      {todolist && (
        <List
          list={todolist}
          handleCheck={handleCheck}
          handleReset={handleReset}
          handleUpdateState={handleUpdateState}
          handleUpdate={handleUpdate}
          handleUpdateTxt={handleUpdateTxt}
          handleCancelUpdate={handleCancelUpdate}
          handleSort={handleSort}
        />
      )}
    </div>
  );
}

export default ToDoList;
