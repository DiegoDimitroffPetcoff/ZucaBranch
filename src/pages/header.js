import React, { useState } from "react";
//import { Outlet, Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

import "../css/head.css";

import Nav from "./nav";

export function Header() {
  return (
    <div className="Main">
      <Nav></Nav>
      <header>
        <div id="header">
          <div className="logo">ZUCA</div>
          <h1>ARCHVIZ</h1>
        </div>    
        <Link to="/login/form" className="button">Comenzar</Link>

   
      </header>
    </div>
  );
}

export default Header;
