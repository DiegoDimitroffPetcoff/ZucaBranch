import React from "react";
//import { Outlet, Link } from "react-router-dom";
import Imagen from "../assests/imagen/logoZUCA.jpeg";
import englandFlag from "../assests/imagen/englandFlag.png";
import spainFlag from "../assests/imagen/spainFlag.png";

import "../css/head.css";

export function Header() {
  return (
    <div>
      <header>
      <div className="lenguajesHeaderContent">
      <img className="lenguajesHeader" src={englandFlag} alt="Logo" />
      <img className="lenguajesHeader" src={spainFlag} alt="Logo" />
      </div>
      <div id="header">
        <img className="imgLogo" src={Imagen} alt="Logo" />
        <h1>TITLE</h1>
        </div>
      </header>
      <div>QUIENES SOMOS / PROJECTOS / CONTACTO </div>
    </div>
  );
}

export default Header;
