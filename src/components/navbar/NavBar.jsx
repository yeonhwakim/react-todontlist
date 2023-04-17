import React from "react";
import "./Navbar.module.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to={"/todontlist"}>TO DON'T LIST</Link>
        </li>
        <li>
          <Link to={"/todolist"}>TO DO LIST</Link>
        </li>
        <li>
          <Link to={"/donelist"}>DONE LIST</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
