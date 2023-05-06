import { useCallback } from "react";

import List from "../list/List";
import AddForm from "../form/AddForm";

import toDontListStyle from "./ToDontList.module.css";

import useTodos from "../../hooks/use-todos";
// import useFetchTodos from "../../hooks/use-fetch-todos";
// import useQueryTodos from "../../hooks/use-query-todos";

import { getFilteredList } from "../../utils/filterList";

function ToDontList() {
  // const [todos, dispatch, filteredTodos, isLoading] = useQueryTodos();
  // const [todos, dispatch, filteredTodos] = useFetchTodos();
  const [todos, dispatch, filteredTodos] = useTodos();

  const todontlist = filteredTodos;

  const handleAdd = (newTodo) => {
    dispatch({ type: "added", newTodo });
  };

  const handleDelete = (deletedId) => {
    const confirm = confirm("Really?");

    if (confirm) {
      dispatch({ type: "deleted", deletedId });
    }
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

    const confirm = confirm("Sure?");

    if (confirm) {
      dispatch({ type: "updated", updatedId });
    }
  };

  const handleCheck = (e, checkedId) => {
    if (getFilteredList({ list: todos, filterName: "todolist" }).length > 2) {
      alert("Already has three.");
      return;
    }

    dispatch({ type: "checkedStart", checkedId });
  };

  const handleSort = useCallback((sortedTodos) => {
    dispatch({ type: "sorted", sortedTodos, filterName: "todontlist" });
  }, []);

  return (
    <div className={toDontListStyle.toDontList}>
      {/* {isLoading && <div>🥱</div>} */}
      {todontlist && (
        <List
          list={todontlist}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
          handleUpdateState={handleUpdateState}
          handleUpdate={handleUpdate}
          handleUpdateTxt={handleUpdateTxt}
          handleCancelUpdate={handleCancelUpdate}
          handleSort={handleSort}
        />
      )}
      <AddForm handleAdd={handleAdd} />
    </div>
  );
}

export default ToDontList;
