import { useState } from "react";
import "./App.css";

function App() {
  const [dontList, setDontList] = useState([
    { id: 1, todo: "리액트 공부하기", startYn: false, doneYn: false },
    { id: 2, todo: "설거지 하기", startYn: false, doneYn: false },
    { id: 3, todo: "씻기", startYn: false, doneYn: false },
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
        startYn: false,
        doneYn: false,
      },
    ]);
    setText("");
  };

  return (
    <div className="App">
      <header className="App-header">TO DON'T LIST</header>
      <ul>
        {dontList.map(({ id, todo }) => (
          <li key={id}>{todo}</li>
        ))}
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
