import React, { useState, useEffect } from "react";
import Nav from "../nav";
import "../../css/contact.css";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import {
  FaEnvelope,
  FaPhone,
  FaInstagram,
  FaFacebook,
  FaMapMarker,
} from "react-icons/fa";

import { AxiosGetAll } from "../../utils/axios";
import FormikEditeContact from "../../utils/formikEditeContact";

export function Contact() {
  let Log = useSelector((state) => state.loggedAction);
  const [Edit, setEdit] = useState(false);
  const [data, setData] = useState([
    {

        "email": "Cargando...",
        "adress": "Cargando...",
        "facebook": "Cargando...",
        "instagram": "Cargando...",
        "cellphone": "Cargando...",
   
    },
  ]);

  useEffect(() => {
    let url = "https://zucaarqback.onrender.com/contact";

    AxiosGetAll(url)
      .then((responseData) => {
        setData(responseData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function editeDescription(params) {
    setEdit(!Edit);
  }

  return (
    <div>
      <Nav></Nav>

      {!Edit ? (
        <div className="containerContact">
          <h1 className="titleContact">Contactos</h1>
          <div className="cardContact">
            <a
              href="mailto:destinatario@ejemplo.com"
              target="_blank"
              className="textContact" rel="noreferrer"
           
            >
              <FaEnvelope /> {data[0].email}
            </a>
          </div>{" "}
          <div className="cardContact">
            <a  href="http://google.com" className="textContact">
              <FaMapMarker /> {data[0].adress}
            </a>
          </div>{" "}
          <div className="cardContact">
            <a href="google.com"  className="textContact">
              <FaFacebook /> {data[0].facebook}
            </a>
          </div>{" "}
          <div className="cardContact">
            <a href="google.com"  className="textContact">
              <FaInstagram /> {data[0].instagram}
            </a>
          </div>{" "}
          <div className="cardContact">
            <a className="textContact" href="google.com" >
              <FaPhone /> {data[0].cellphone}
            </a>
          </div>{" "}
        </div>
      ) : (
        <FormikEditeContact
        id= {data[0]._id}
        email={data[0].email}
        adress={data[0].adress}
        facebook={data[0].facebook}
        instagram={data[0].instagram}
        cellphone={data[0].cellphone} 
        ></FormikEditeContact>
      )}

      {Log && !Edit && data[0].title !== "Cargando.." ? (
        <div className="ContainerButton">
          <Button variant="success" onClick={() => editeDescription()}>
            EDITAR PUBLICACION
          </Button>{" "}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Contact;
