import { useEffect, useReducer } from "react";
import todosReducer from "../../reducers/todos-reducer";
import Header from "../header/Header";
import List from "../list/List";
import AddForm from "../form/AddForm";
import { getLocalStoage, setLocalStoage } from "../../utils/localStorage";
import {
  getFilterdLessThreeMonthList,
  getFilterdList,
} from "../../utils/filterList";

function ToDontList() {
  const [todos, dispatch] = useReducer(
    todosReducer,
    getFilterdLessThreeMonthList(getLocalStoage("todos"))
  );

  useEffect(() => {
    setLocalStoage(todos);
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

    dispatch({ type: "checkedStart", checkedId, checked: e.target.checked });
  };

  const todontlist = getFilterdList({
    list: todos,
    filterName: "todontlist",
  });

  return (
    <div>
      <Header title={"TO DON'T LIST"} />
      {todontlist && (
        <List
          list={todontlist}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
          handleUpdateState={handleUpdateState}
          handleUpdate={handleUpdate}
          handleUpdateTxt={handleUpdateTxt}
          handleCancelUpdate={handleCancelUpdate}
        />
      )}
      <AddForm handleAdd={handleAdd} />
    </div>
  );
}

export default ToDontList;
