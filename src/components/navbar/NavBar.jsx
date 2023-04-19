import React, { useContext } from "react";
import "./Navbar.module.css";
import navbarStyle from "./Navbar.module.css";
import { Link, useLocation } from "react-router-dom";
import { DarkModeContext } from "../../App";

const tabList = [
  { title: "TO DON'T LIST", path: "/todontlist" },
  { title: "TO DO LIST", path: "/todolist" },
  { title: "DONE LIST", path: "/donelist" },
];

function NavBar() {
  const location = useLocation();
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <nav>
      <ul>
        {tabList.map(({ title, path }) => (
          <li
            key={path}
            className={`${location.pathname === path && navbarStyle.active}`}
          >
            <Link to={path}>{title}</Link>
          </li>
        ))}
      </ul>
      <button onClick={toggleDarkMode} type="button">
        {darkMode ? "dark" : "red"}
      </button>
    </nav>
  );
}

export default NavBar;
