import React, { useEffect, useReducer } from "react";
import Header from "../header/Header";
import List from "../list/List";
import todosReducer from "../../reducers/todos-reducer";
import { getLocalStoage, setLocalStoage } from "../../utils/localStorage";
import { getFilterdList } from "../../utils/filterList";

function DoneList() {
  const [todos, dispatch] = useReducer(todosReducer, getLocalStoage("todos"));

  useEffect(() => {
    setLocalStoage(todos);
  }, [todos]);

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

  const donelist = getFilterdList({
    list: todos,
    filterName: "donelist",
  });

  return (
    <div>
      <Header title={"DONE LIST"} />
      {donelist && (
        <List
          list={donelist}
          handleDelete={handleDelete}
          handleUpdateState={handleUpdateState}
          handleUpdate={handleUpdate}
          handleUpdateTxt={handleUpdateTxt}
          handleCancelUpdate={handleCancelUpdate}
        />
      )}
    </div>
  );
}

export default DoneList;
