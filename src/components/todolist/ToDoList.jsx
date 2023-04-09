import { useEffect, useReducer } from "react";
import todolistReducer from "../../reducers/todolist-reducer";
import Header from "../header/Header";
import List from "../list/List";

function ToDontList() {
  const [todolist, dispatch] = useReducer(todolistReducer, []);

  useEffect(() => {
    fetch(`data/todos.json`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "fetch", todos: data });
      })
      .catch((e) => console.log(e));
  }, []);

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

  return (
    <div>
      <Header title={"TO DO LIST"} />
      {todolist && (
        <List
          list={todolist}
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

export default ToDontList;
