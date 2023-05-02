import { useCallback } from "react";
import toDontListStyle from "./ToDontList.module.css";
import List from "../list/List";
import AddForm from "../form/AddForm";
import { getFilteredList } from "../../utils/filterList";
import useTodos from "../../hooks/use-todos";

function ToDontList() {
  const [todos, dispatch, filteredTodos] = useTodos();

  const todontlist = filteredTodos;

  const handleAdd = (newTodo) => {
    dispatch({ type: "added", newTodo });
  };

  const handleDelete = (deletedId) => {
    dispatch({ type: "deleted", deletedId });
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
    dispatch({ type: "updated", updatedId });
  };

  const handleCheck = (e, checkedId) => {
    if (getFilteredList({ list: todos, filterName: "todolist" }).length > 2) {
      return;
    }

    dispatch({ type: "checkedStart", checkedId });
  };

  const handleSort = useCallback((sortedTodos) => {
    dispatch({ type: "sorted", sortedTodos, filterName: "todontlist" });
  }, []);

  return (
    <div className={toDontListStyle.toDontList}>
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
