import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar/NavBar";

function App() {
  return (
    <div className="App">
      <div className="navbar-wrapper">
        <NavBar />
      </div>
      <div className="list-wrapper">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
