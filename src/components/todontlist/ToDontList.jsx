import { useEffect, useReducer } from "react";
import todosReducer from "../../reducers/todos-reducer";
import toDontListStyle from "./ToDontList.module.css";
import List from "../list/List";
import AddForm from "../form/AddForm";
import { getLocalStoage, setLocalStoage } from "../../utils/localStorage";
import {
  compareIndex,
  getFilterdLessThreeMonthList,
  getFilterdList,
} from "../../utils/filterList";

function ToDontList() {
  const [todos, dispatch] = useReducer(
    todosReducer,
    getFilterdLessThreeMonthList(getLocalStoage("todos"))
  );

  useEffect(() => {
    setLocalStoage("todos", todos);
  }, [todos]);

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
    if (getFilterdList({ list: todos, filterName: "todolist" }).length > 2) {
      return;
    }

    dispatch({ type: "checkedStart", checkedId });
  };

  const handleSort = ({ sortedTodos }) => {
    dispatch({
      type: "sorted",
      sortedTodos: sortedTodos.map((item, index) => {
        return { ...item, priority: index };
      }),
    });
  };

  const todontlist = getFilterdList({
    list: todos,
    filterName: "todontlist",
  }).sort(compareIndex);

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
