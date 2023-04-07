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

  const handleUpdateState = (updateId) => {
    setDontList((prev) =>
      prev.map((item) => {
        const { id } = item;
        if (updateId === id) {
          return { ...item, updateYn: true };
        }
        return item;
      })
    );
  };

  const handleUpdateTxt = (e, updateId) => {
    setDontList((prev) =>
      prev.map((item) => {
        const { id } = item;
        if (updateId === id) {
          return { ...item, updateTodo: e.target.value };
        }
        return item;
      })
    );
  };

  const handleCancelUpdate = (updateId) => {
    setDontList((prev) =>
      prev.map((item) => {
        const { id, todo } = item;
        if (updateId === id) {
          return { ...item, updateTodo: todo, updateYn: false };
        }
        return item;
      })
    );
  };

  const handleUpdate = (e, updateId) => {
    e.preventDefault();

    setDontList((prev) =>
      prev.map((item) => {
        const { id, updateTodo } = item;
        if (updateId === id) {
          return { ...item, todo: updateTodo, updateYn: false };
        }
        return item;
      })
    );
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
