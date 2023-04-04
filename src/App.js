import { useState } from "react";
import "./App.css";

function App() {
  const [dontList, setDontList] = useState([
    { id: 1, todo: "리액트 공부하기", startYn: false, doneYn: false },
    { id: 2, todo: "설거지 하기", startYn: false, doneYn: false },
    { id: 3, todo: "씻기", startYn: false, doneYn: false },
  ]);

  return (
    <div className="App">
      <header className="App-header">TO DON'T LIST</header>
      <ul>
        {dontList.map(({ id, todo }) => (
          <li key={id}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
