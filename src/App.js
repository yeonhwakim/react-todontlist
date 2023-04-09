import "./App.css";
import ToDontList from "./components/todontlist/ToDontList";
import ToDoList from "./components/todolist/ToDoList";
import DoneList from "./components/donelist/DoneList";

function App() {
  return (
    <div className="App">
      <ToDontList />
      <ToDoList />
      <DoneList />
    </div>
  );
}

export default App;
