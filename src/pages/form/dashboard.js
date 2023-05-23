import React from "react";
import "../../css/login.css";
import Nav from "../nav";
import Cookies from "js-cookie";
import "../../css/dashboard.css";

import Dropdown from "react-bootstrap/Dropdown";

function Dashboard() {
  const userString = Cookies.get("userLogged");
  let userParse = "";
  if (userString) {
    userParse = JSON.parse(userString);
  }
  return (
    <div className="dashboardConteiner">
      <Nav></Nav>
      <Dropdown.Menu show className="dashboardMenu">
       <h1> Bienvenido : {userParse.username}</h1>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="1" href="login/form">
         <h1> Agregar un Nuevo Proyecto</h1>
        </Dropdown.Item>
        <Dropdown.Item eventKey="2" href="projectlist">
        <h1> Editar y/o Eliminar un proyecto</h1>
        </Dropdown.Item>
         <Dropdown.Divider />
        <Dropdown.Item eventKey="3" href="profile"><h1>Editar Seccion "Quien soy"</h1></Dropdown.Item>
        <Dropdown.Item eventKey="4"><h1>Editar Seccion "Contactos"</h1></Dropdown.Item>
      </Dropdown.Menu>
      <div className="dashboardMenu"></div>{" "}
    </div>
  );
}

export default Dashboard;
