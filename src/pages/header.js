import React, { useState } from "react";
//import { Outlet, Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

import "../css/head.css";
import "../css/nav.css";
import Nav from "./nav";

export function Header() {
  const [navIsOpen, setNavIsOpen] = useState(false);

  function toggleMenu() {
    setNavIsOpen(!navIsOpen);
    const navElement = document.getElementsByTagName("ul")[0];
    if (navElement) {
      navElement.classList.toggle("show");
    }
  }
  

  return (
    <div>
      <header >
      <nav>
        <button className="menuBottomn" onClick={toggleMenu}>
          {" "}
          <FaBars></FaBars>
        </button>
       <span id="nav"><Nav></Nav> </span>
        </nav>
        <div id="header">
          <div className="logo">ZUCA</div>
          <h1>ARCHVIZ</h1>
        </div>
        <button>Comenzar</button>
      </header>
    </div>
  );
}

export default Header;
