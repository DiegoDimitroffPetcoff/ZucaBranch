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
  let log = useSelector((state) => state.loggedAction);

  const userString = Cookies.get("userLogged");
  let userParse = "";
  if (userString) {
    console.log("SI");
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
          <li>
            {!log ? <Link to="/login">Login</Link> : userParse.username}

            {!log ? (
              ""
            ) : (
              <button
                className="logOutBotton"
                onClick={() => dispatch(DESLOGEARSE())}
              >
                DESLOGEARSE
              </button>
            )}
          </li>
          {/*   <li className="lenguajesHeaderContent">
            <img className="lenguajesHeader" src={englandFlag} alt="Logo" />
            <img className="lenguajesHeader" src={spainFlag} alt="Logo" />
          </li>*/}
        </ul>{" "}
      </span>
    </nav>
  );
}

export default Nav;
