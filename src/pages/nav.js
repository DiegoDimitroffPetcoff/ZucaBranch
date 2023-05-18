import React, { useState } from "react";
import "../css/nav.css";
import "../css/head.css";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

import englandFlag from "../assests/imagen/englandFlag.png";
import spainFlag from "../assests/imagen/spainFlag.png";
import { useSelector, useDispatch } from "react-redux";
import Cookies from "js-cookie";

import { DESLOGEARSE } from "../../src/reducers/actions";

export function Nav() {
  const [navIsOpen, setNavIsOpen] = useState(false);

  const [navLogIsOpen, setNavLogIsOpen] = useState(false);
  let log = useSelector((state) => state.loggedAction);

  const userString = Cookies.get("userLogged");
  let userParse = "";
  if (userString) {
    
    userParse = JSON.parse(userString);
  }

  const dispatch = useDispatch();

  function toggleMenu() {
    setNavIsOpen(!navIsOpen);
    const navElement = document.getElementsByTagName("ul")[0];
    if (navElement) {
      navElement.classList.toggle("show");
    }
  }

  function toggleLogMenu() {
    setNavLogIsOpen(!navLogIsOpen);
    const navElement = document.getElementsByClassName("logOutBotton")[0];
    if (navElement) {
      navElement.classList.toggle("showLogOut");
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
          <li className="navLogIsOpen">
            {!log ? (
              <Link to="/login">Login</Link>
            ) : (
              <button className="navLogIsOpen" onClick={toggleLogMenu}>
                {userParse.username}
              </button>
            )}
            {!log ? (
              ""
            ) : (
              <button
                className="logOutBotton"
                onClick={() => dispatch(DESLOGEARSE())}
              >
                Log Out
              </button>
            )}
          </li>
        </ul>

      </span>
    </nav>
  );
}

export default Nav;
