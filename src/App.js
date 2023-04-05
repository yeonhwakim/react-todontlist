import { useState } from "react";
import "./App.css";

function App() {
  const [dontList, setDontList] = useState([
    {
      id: 1,
      todo: "리액트 공부하기",
      updateTodo: "리액트 공부하기",
      updateYn: false,
      startYn: false,
      doneYn: false,
    },
    {
      id: 2,
      todo: "설거지 하기",
      updateTodo: "설거지 하기",
      updateYn: false,
      startYn: false,
      doneYn: false,
    },
    {
      id: 3,
      todo: "씻기",
      updateTodo: "씻기",
      updateYn: false,
      startYn: false,
      doneYn: false,
    },
  ]);

  const [text, setText] = useState("");

  const handleInputText = (e) => {
    setText(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    setDontList((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        todo: text,
        updateTodo: text,
        startYn: false,
        doneYn: false,
      },
    ]);
    setText("");
  };

  const handleDelete = (deleteId) => {
    setDontList((prev) => prev.filter(({ id }) => id !== deleteId));
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
      <header className="App-header">TO DON'T LIST</header>
      <ul>
        {dontList.map(
          ({ id, todo, updateTodo, updateYn, startYn }) =>
            !startYn && (
              <li key={id}>
                {!updateYn && (
                  <div>
                    <input
                      type="checkbox"
                      onChange={(e) => handleCheck(e, id)}
                    />
                    <span>{todo}</span>
                    <button onClick={() => handleDelete(id)}>delete</button>
                    <button onClick={() => handleUpdateState(id)}>
                      update
                    </button>
                  </div>
                )}
                {updateYn && (
                  <form onSubmit={(e) => handleUpdate(e, id)}>
                    <input
                      type="text"
                      value={updateTodo}
                      onChange={(e) => handleUpdateTxt(e, id)}
                    />
                    <button
                      type="button"
                      onClick={() => handleCancelUpdate(id)}
                    >
                      cancel
                    </button>
                    <button type="submit">update</button>
                  </form>
                )}
              </li>
            )
        )}
      </ul>
      <form onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="Add to don't list"
          value={text}
          onChange={handleInputText}
        />
        <button type="submit">입력</button>
      </form>
    </div>
  );
}

export default App;
