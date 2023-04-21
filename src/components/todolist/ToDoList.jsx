import { useEffect, useReducer } from "react";
import todosReducer from "../../reducers/todos-reducer";
import toDoListStyle from "./ToDoList.module.css";
import List from "../list/List";
import { getLocalStoage, setLocalStoage } from "../../utils/localStorage";
import { getFilterdList } from "../../utils/filterList";

function ToDoList() {
  const [todos, dispatch] = useReducer(
    todosReducer,
    getLocalStoage("todos") || []
  );

  useEffect(() => {
    setLocalStoage("todos", todos);
  }, [todos]);

  const handleReset = (resetId) => {
    dispatch({ type: "resetStart", resetId });

    if (todolist?.length > 3) {
      return;
    }

    dispatch({
      type: "checkedStart",
      checkedId: getFilterdList({ list: todos, filterName: "todontlist" })[0]
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
    dispatch({ type: "updated", updatedId });
  };

  const handleCheck = (e, checkedId) => {
    dispatch({ type: "checkedDone", checkedId, checked: e.target.checked });

    if (todolist?.length > 3) {
      return;
    }

    dispatch({
      type: "checkedStart",
      checkedId: getFilterdList({ list: todos, filterName: "todontlist" })[0]
        ?.id,
    });
  };

  const todolist = getFilterdList({
    list: todos,
    filterName: "todolist",
  });

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
        />
      )}
    </div>
  );
}

export default ToDoList;
