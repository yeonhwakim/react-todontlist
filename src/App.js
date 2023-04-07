import { useEffect, useReducer, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import DontList from "./components/list/DontList";
import AddForm from "./components/form/AddForm";
import todontlistReducer from "./reducers/todontlist-reducer";

function App() {
  const [dontList, setDontList] = useState([]);
  const [list, dispatch] = useReducer(todontlistReducer, []);

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
    const { checked } = e.target;

    setDontList((prev) =>
      prev.map((item) => {
        const { id } = item;
        if (checkedId === id) {
          return { ...item, startYn: checked };
        }
        return item;
      })
    );
  };

  return (
    <div className="App">
      <Header title={"TO DON'T LIST"} />
      {list && (
        <DontList
          dontList={list}
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

export default App;
