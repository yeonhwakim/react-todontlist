import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import { createContext } from "react";
import { DarkModeProvider } from "./contexts/DarkModeContext";

export const DarkModeContext = createContext();

function App() {
  return (
    <DarkModeProvider>
      <div className="App">
        <div className="navbar-wrapper">
          <NavBar />
        </div>
        <div className="list-wrapper">
          <Outlet />
        </div>
      </div>
    </DarkModeProvider>
  );
}

export default App;
