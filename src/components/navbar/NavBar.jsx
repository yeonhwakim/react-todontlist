import React from "react";
import "./Navbar.module.css";
import navbarStyle from "./Navbar.module.css";
import { Link, useLocation } from "react-router-dom";

const tabList = [
  { title: "TO DON'T LIST", path: "/todontlist" },
  { title: "TO DO LIST", path: "/todolist" },
  { title: "DONE LIST", path: "/donelist" },
];

function NavBar() {
  const location = useLocation();

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
    </nav>
  );
}

export default NavBar;
