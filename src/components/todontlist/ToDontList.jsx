import { useEffect, useReducer } from "react";
import todontlistReducer from "../../reducers/todontlist-reducer";
import Header from "../header/Header";
import List from "../list/List";
import AddForm from "../form/AddForm";
import { getLocalStoage, setLocalStoage } from "../../utils/localStorage";

function ToDontList() {
  const [todontlist, dispatch] = useReducer(todontlistReducer, []);

  useEffect(() => {
    const todos = getLocalStoage("todos");
    dispatch({ type: "fetch", todos });
  }, []);

  useEffect(() => {
    setLocalStoage(todontlist);
  }, [todontlist]);

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
    dispatch({ type: "checked", checkedId, checked: e.target.checked });
    dispatch({ type: "setTodontList", checkedId, checked: e.target.checked });
  };

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
