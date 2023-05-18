import React from "react";
import { Formik, Form } from "formik";
import axios from "axios";
import "../../css/login.css";
import Nav from "../nav";
import BarLoader from "react-spinners/BarLoader";
import Button from "react-bootstrap/Button";
import "../../css/dashboard.css";


import Dropdown from "react-bootstrap/Dropdown";

function Dashboard() {
  return (
    <div className="dashboardConteiner">
      <Nav></Nav>

        <Dropdown.Menu show className="dashboardMenu">
        Dashboard / Panel de control
        <Dropdown.Divider />
          <Dropdown.Item eventKey="1"  href="login/form">Agregar un Nuevo Proyecto</Dropdown.Item>
          <Dropdown.Item eventKey="2" href="login/form">Editar un proyecto</Dropdown.Item>
          <Dropdown.Item eventKey="2" href="projectlist">Eliminar un proyecto</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="3">Editar Seccion "Quien soy"</Dropdown.Item>
          <Dropdown.Item eventKey="4">Editar Seccion "Contactos"</Dropdown.Item>
          

        </Dropdown.Menu>
        <div className="dashboardMenu">

      </div>{" "}
    </div>
  );
}

export default Dashboard;
