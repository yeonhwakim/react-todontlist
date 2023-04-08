import { useEffect, useReducer } from "react";
import todontlistReducer from "../../reducers/todontlist-reducer";
import Header from "../header/Header";
import List from "../list/List";
import AddForm from "../form/AddForm";

function ToDontList() {
  const [todontlist, dispatch] = useReducer(todontlistReducer, []);

  useEffect(() => {
    fetch(`data/todos.json`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "fetch", todos: data });
      })
      .catch((e) => console.log(e));
  }, []);

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
    <>
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
    </>
  );
}

export default ToDontList;
