import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import { createContext, useEffect, useState } from "react";
import { getLocalStoage, setLocalStoage } from "./utils/localStorage";

export const DarkModeContext = createContext();

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode =
      getLocalStoage("theme") === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDarkMode(isDarkMode);
    updateDarkMode(isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    updateDarkMode(!darkMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <div className="App">
        <div className="navbar-wrapper">
          <NavBar />
        </div>
        <div className="list-wrapper">
          <Outlet />
        </div>
      </div>
    </DarkModeContext.Provider>
  );
}

function updateDarkMode(darkMode) {
  if (darkMode) {
    document.documentElement.classList.add("dark");
    setLocalStoage("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    setLocalStoage("theme", "light");
  }
}

export default App;
