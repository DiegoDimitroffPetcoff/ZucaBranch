import React from "react";
import '../css/nav.css'


import englandFlag from "../assests/imagen/englandFlag.png";
import spainFlag from "../assests/imagen/spainFlag.png";

export function Nav() {
  return (
    <ul>
      <li>Quien Soy</li>
      <li>Proyectos</li>
      <li> Contacto</li>
      <li className="lenguajesHeaderContent">
          <img className="lenguajesHeader" src={englandFlag} alt="Logo" />
          <img className="lenguajesHeader" src={spainFlag} alt="Logo" />
        </li>
    </ul>
  );
}


export default Nav;
