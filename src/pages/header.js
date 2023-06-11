import { Link } from "react-router-dom";
import axios from "axios";

import "../css/head.css";

import Nav from "./nav";

export function Header() {
  axios
    .get("https://zucaback2.fly.dev", {})
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

  axios
    .get("https://backendlogin.onrender.com", {})
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

  return (
    <div className="Main">
      <Nav></Nav>
      <header>
        <div id="header">
          <div className="logo">ZUCA</div>
          <h1>ARCHVIZ</h1>
        </div>

        {/*       <Link to="/login/form" className="button">
          Comenzar
        </Link>*/}
      </header>
    </div>
  );
}

export default Header;
