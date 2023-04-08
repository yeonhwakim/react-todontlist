import "./App.css";
import ToDontList from "./components/todontlist/ToDontList";
import ToDoList from "./components/todolist/ToDoList";

function App() {
  return (
    <div className="App">
      <ToDontList />
      <ToDoList />
    </div>
  );
}

export default App;
