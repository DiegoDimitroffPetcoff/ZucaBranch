import React, { useState } from "react";
import "../css/nav.css";
import "../css/head.css";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

import englandFlag from "../assests/imagen/englandFlag.png";
import spainFlag from "../assests/imagen/spainFlag.png";

export function Nav() {
  const [navIsOpen, setNavIsOpen] = useState(false);

  function toggleMenu() {
    setNavIsOpen(!navIsOpen);
    const navElement = document.getElementsByTagName("ul")[0];
    if (navElement) {
      navElement.classList.toggle("show");
    }
  }
  return (
    <nav>
      <button className="menuBottomn" onClick={toggleMenu}>
        {" "}
        <FaBars></FaBars>
      </button>
      <span id="nav">
        {" "}
        <ul>
          <li>
            <Link to="/">Quien Soy?</Link>
          </li>
          <li>
            <Link to="/projectlist">Proyectos</Link>
          </li>

          <li>
            <Link to="/">Contacto</Link>
          </li>
          <li className="lenguajesHeaderContent">
            <img className="lenguajesHeader" src={englandFlag} alt="Logo" />
            <img className="lenguajesHeader" src={spainFlag} alt="Logo" />
          </li>
        </ul>{" "}
      </span>
    </nav>
  );
}

export default Nav;
